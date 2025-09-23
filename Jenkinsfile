pipeline {
  agent any
  options { ansiColor('xterm'); disableConcurrentBuilds(); timestamps() }

  environment {
    BASE_DIR       = '/home/ansible' // permanent per-repo dir
    IMAGE_REGISTRY = 'ghcr.io'       // GitHub Container Registry
  }

  stages {
    stage('Guard: only main') {
      when { expression { env.BRANCH_NAME && env.BRANCH_NAME != 'main' } }
      steps {
        echo "Skipping ${env.BRANCH_NAME} (only building main)."
        script { currentBuild.result = 'NOT_BUILT' }
      }
    }

    stage('Prep paths & repo vars') {
      steps {
        script {
          def repoUrl  = sh(script: "git config --get remote.origin.url", returnStdout: true).trim()
          def repoName = repoUrl.tokenize('/').last().replaceAll(/\\.git$/, '')
          def owner    = repoUrl.tokenize('/')[-2]

          env.IMAGE_OWNER      = owner
          env.IMAGE_NAME       = repoName
          env.BASE_PROJECT_DIR = "${env.BASE_DIR}/${repoName}"
          env.TEMP_DIR         = "${env.BASE_PROJECT_DIR}/.tmp_${env.BUILD_NUMBER}"

          sh "mkdir -p '${env.BASE_PROJECT_DIR}' '${env.TEMP_DIR}'"
        }
      }
    }

    stage('Clone fresh into TEMP (main)') {
      steps {
        dir("${env.TEMP_DIR}") {
          checkout([$class: 'GitSCM',
            branches: [[name: "*/main"]],
            userRemoteConfigs: [[
              url: sh(script: "git config --get remote.origin.url", returnStdout: true).trim(),
              credentialsId: 'github-ghcr-creds'
            ]]
          ])
          script {
            def commit = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
            env.IMAGE_TAG    = "main-${commit}"
            env.FULL_IMAGE   = "${env.IMAGE_REGISTRY}/${env.IMAGE_OWNER}/${env.IMAGE_NAME}:${env.IMAGE_TAG}"
            env.LATEST_IMAGE = "${env.IMAGE_REGISTRY}/${env.IMAGE_OWNER}/${env.IMAGE_NAME}:latest"
          }
        }
      }
    }

    stage('Docker login (GHCR)') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'github-ghcr-creds',
                                          usernameVariable: 'GH_USER',
                                          passwordVariable: 'GH_PAT')]) {
          sh 'echo "$GH_PAT" | docker login ${IMAGE_REGISTRY} -u "$GH_USER" --password-stdin'
        }
      }
    }

    stage('Build image via docker-compose.prod.yml') {
      steps {
        sh """
          set -euo pipefail
          cd '${TEMP_DIR}'

          export IMAGE_REGISTRY='${IMAGE_REGISTRY}'
          export IMAGE_OWNER='${IMAGE_OWNER}'
          export IMAGE_NAME='${IMAGE_NAME}'
          export IMAGE_TAG='${IMAGE_TAG}'

          if [ ! -f docker-compose.prod.yml ]; then
            echo 'ERROR: docker-compose.prod.yml not found.' >&2
            exit 1
          fi

          docker compose -f docker-compose.prod.yml build
          docker tag '${FULL_IMAGE}' '${LATEST_IMAGE}' || true
        """
      }
    }

    stage('Move deploy files out of TEMP') {
      steps {
        sh """
          set -euo pipefail
          cd '${TEMP_DIR}'
          for f in docker-compose.prod.yml .env credentials.json; do
            [ -f "\$f" ] && mv -f "\$f" '${BASE_PROJECT_DIR}/' || true
          done
        """
      }
    }

    stage('Compose Up (permanent dir)') {
      steps {
        sh """
          set -euo pipefail
          cd '${BASE_PROJECT_DIR}'
          export IMAGE_REGISTRY='${IMAGE_REGISTRY}'
          export IMAGE_OWNER='${IMAGE_OWNER}'
          export IMAGE_NAME='${IMAGE_NAME}'
          export IMAGE_TAG='${IMAGE_TAG}'

          if [ ! -f docker-compose.prod.yml ]; then
            echo 'WARN: docker-compose.prod.yml not found in permanent dir; skipping up.'
            exit 0
          fi

          docker compose -f docker-compose.prod.yml up -d
        """
      }
    }

    stage('Push image to GHCR') {
      steps {
        sh """
          set -euo pipefail
          docker push '${FULL_IMAGE}'
          docker push '${LATEST_IMAGE}' || true
        """
      }
    }

    stage('Prune dangling images (optional)') {
      steps { sh "docker image prune -f || true" }
    }
  }

  post {
    always {
      sh "rm -rf '${TEMP_DIR}' || true"
    }
    success {
      echo "Built, deployed, and pushed: ${FULL_IMAGE}"
    }
  }
}
