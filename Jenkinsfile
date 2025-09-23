pipeline {
  agent any
  options {
    disableConcurrentBuilds()
    timestamps()
    ansiColor('xterm')
  }

  environment {
    BASE_DIR        = '/home/ansible'
    IMAGE_REGISTRY  = 'ghcr.io'
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
          def repoUrl = sh(script: 'git config --get remote.origin.url', returnStdout: true).trim()
          env.REPO_URL = repoUrl

          def norm     = repoUrl.replace(':','/')
          def parts    = norm.tokenize('/')
          def repoPart = parts[-1]
          def owner    = parts[-2]
          def name     = repoPart.endsWith('.git') ? repoPart[0..-5] : repoPart

          env.IMAGE_OWNER      = owner.toLowerCase()
          env.IMAGE_NAME       = name.toLowerCase()
          env.BASE_PROJECT_DIR = "${env.BASE_DIR}/${env.IMAGE_NAME}"
          env.TEMP_DIR         = "${env.BASE_PROJECT_DIR}/.tmp_${env.BUILD_NUMBER}"

          // we’re going latest-only now
          env.IMAGE_TAG        = "latest"

          sh '''
            bash -lc '
              set -Eeuo pipefail
              mkdir -p "$BASE_PROJECT_DIR" "$TEMP_DIR"
            '
          '''
          echo "Owner=${env.IMAGE_OWNER} Repo=${env.IMAGE_NAME} Tag=${env.IMAGE_TAG}"
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
        }
      }
    }

    stage('Docker login (GHCR)') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.GITHUB_CREDS_ID,
                                          usernameVariable: 'GH_USER',
                                          passwordVariable: 'GH_PAT')]) {
          sh '''
            bash -lc '
              set -Eeuo pipefail
              : "${JENKINS_HOME:=/var/jenkins_home}"
              export DOCKER_CONFIG="${JENKINS_HOME}/.docker"
              mkdir -p "$DOCKER_CONFIG" && chmod 700 "$DOCKER_CONFIG"
              echo "$GH_PAT" | docker --config "$DOCKER_CONFIG" login ghcr.io -u "$GH_USER" --password-stdin
            '
          '''
        }
      }
    }

    stage('Build image (:latest) via docker-compose.prod.yml') {
      steps {
        sh '''
          bash -lc '
            set -Eeuo pipefail
            cd "$TEMP_DIR"

            if [[ ! -f docker-compose.prod.yml ]]; then
              echo "ERROR: docker-compose.prod.yml not found" >&2
              exit 1
            fi

            # Build will tag ghcr.io/$IMAGE_OWNER/$IMAGE_NAME:latest per compose image reference
            docker compose -f docker-compose.prod.yml build
          '
        '''
      }
    }

    stage('Move deploy files out of TEMP (force replace)') {
      steps {
        sh '''
          bash -lc '
            set -Eeuo pipefail
            cd "$TEMP_DIR"
            # -f ensures overwrite if file exists in target dir
            for f in docker-compose.prod.yml .env .env.local credentials.json; do
              [[ -f "$f" ]] && mv -f "$f" "$BASE_PROJECT_DIR/" || true
            done
          '
        '''
      }
    }

    stage('Compose Up (permanent dir)') {
      steps {
        sh '''
          bash -lc '
            set -Eeuo pipefail
            cd "$BASE_PROJECT_DIR"

            if [[ ! -f docker-compose.prod.yml ]]; then
              echo "WARN: no docker-compose.prod.yml here; skipping up"
              exit 0
            fi

            docker compose -f docker-compose.prod.yml up -d
          '
        '''
      }
    }

    stage('Push :latest to GHCR') {
      steps {
        sh '''
          bash -lc '
            set -Eeuo pipefail
            docker push "ghcr.io/$IMAGE_OWNER/$IMAGE_NAME:latest"
          '
        '''
      }
    }

    stage('Prune dangling (previous latest)') {
      steps {
        sh '''
          bash -lc '
            set -Eeuo pipefail
            # remove only untagged/unused images; safe for “latest-only” policy
            docker image prune -f || true
          '
        '''
      }
    }
  }

  post {
    always {
      sh '''
        bash -lc '
          set -Eeuo pipefail
          rm -rf "$TEMP_DIR" || true
        '
      '''
    }
    success {
      echo "Built, deployed, pushed: ghcr.io/${IMAGE_OWNER}/${IMAGE_NAME}:latest"
    }
  }
}
