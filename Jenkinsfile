def playwrightAppDir = 'playwrightWebApp'

pipeline {
    agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.41.2-jammy'
      args '--ipc=host'
    }
  }
    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        disableConcurrentBuilds() 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/peterthx/pw-test-web.git'
            }
        }

        stage('Install & Setup') {
            steps {
                dir(playwrightAppDir) {
                    sh 'npm ci'
                    sh 'npx playwright install --with-deps'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                dir(playwrightAppDir) {
                    sh 'npm run test'
                }
            }
        }
    }

    post {
        always {
            dir(playwrightAppDir) {
                junit allowEmptyResults: true, testResults: 'test-results/*.xml'
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
        success {
            // Placeholder for success notification
            // slackSend channel: '#your-channel', message: "Pipeline '${env.JOB_NAME}' (${env.BUILD_NUMBER}) successful!"
        }
        failure {
            // Placeholder for failure notification
            // slackSend channel: '#your-channel', message: "Pipeline '${env.JOB_NAME}' (${env.BUILD_NUMBER}) failed!", color: 'danger'
        }
        cleanup {
            cleanWs()
        }
    }
}