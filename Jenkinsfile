pipeline {
  agent any
  options { disableConcurrentBuilds(); timestamps() }

  environment {
    BASE_DIR       = '/home/ansible'
    IMAGE_REGISTRY = 'ghcr.io'
    GITHUB_CREDS_ID = '63482712-9185-4fca-b8ba-84649d66a380'
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
          // Get origin URL from the already-checked-out multibranch workspace
          def repoUrl = sh(script: 'git config --get remote.origin.url', returnStdout: true).trim()
          env.REPO_URL = repoUrl

          // Derive owner and repo WITHOUT using a regex Matcher (so it’s serializable)
          // Handles both https://github.com/owner/repo.git and git@github.com:owner/repo.git
          def norm = repoUrl.replace(':','/')            // git@github.com:owner/repo.git -> git@github.com/owner/repo.git
          def parts = norm.tokenize('/')                 // split by '/'
          def repoPart = parts[-1]                       // "repo.git" or "repo"
          def ownerPart = parts[-2]                      // "owner"
          def repoName = repoPart.endsWith('.git') ? repoPart[0..-5] : repoPart

          env.IMAGE_OWNER = ownerPart
          env.IMAGE_NAME  = repoName

          env.BASE_PROJECT_DIR = "${env.BASE_DIR}/${env.IMAGE_NAME}"
          env.TEMP_DIR         = "${env.BASE_PROJECT_DIR}/.tmp_${env.BUILD_NUMBER}"

          sh "mkdir -p '${env.BASE_PROJECT_DIR}' '${env.TEMP_DIR}'"
          echo "Owner=${env.IMAGE_OWNER} Repo=${env.IMAGE_NAME}"
        }
      }
    }

    stage('Clone fresh into TEMP (main)') {
      steps {
        dir("${env.TEMP_DIR}") {
          checkout([
            $class: 'GitSCM',
            branches: [[name: "*/main"]],
            userRemoteConfigs: [[ url: env.REPO_URL, credentialsId: env.GITHUB_CREDS_ID ]]
          ])
          script {
            def commit = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
            env.IMAGE_TAG     = "main-${commit}"
            env.FULL_IMAGE    = "${env.IMAGE_REGISTRY}/${env.IMAGE_OWNER}/${env.IMAGE_NAME}:${env.IMAGE_TAG}"
            env.LATEST_IMAGE  = "${env.IMAGE_REGISTRY}/${env.IMAGE_OWNER}/${env.IMAGE_NAME}:latest"
            echo "Tag=${env.IMAGE_TAG}"
          }
        }
      }
    }

    stage('Docker login (GHCR)') {
        steps {
            withCredentials([usernamePassword(credentialsId: env.GITHUB_CREDS_ID,
                                            usernameVariable: 'GH_USER',
                                            passwordVariable: 'GH_PAT')]) {
            sh '''
                set -euo pipefail
                : "${JENKINS_HOME:=/var/jenkins_home}"
                export DOCKER_CONFIG="${JENKINS_HOME}/.docker"
                mkdir -p "$DOCKER_CONFIG"
                chmod 700 "$DOCKER_CONFIG"

                echo "$GH_PAT" | docker --config "$DOCKER_CONFIG" login ghcr.io -u "$GH_USER" --password-stdin
            '''
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

          [ -f docker-compose.prod.yml ] || { echo 'ERROR: docker-compose.prod.yml not found'; exit 1; }

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

          [ -f docker-compose.prod.yml ] || { echo 'WARN: no docker-compose.prod.yml here; skipping up'; exit 0; }
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
      echo "Built, deployed, pushed: ${FULL_IMAGE}"
    }
  }
}
