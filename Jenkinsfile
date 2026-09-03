pipeline {
    // Here to run this is always we have install two plugins docker pipeline and HTML Publiser
    agent {
        docker {
            // Using Offical image and Match the version of the playwright install in package.json
            image 'mcr.microsoft.com/playwright:v1.45.0-jammy'
            args '-u root:root --ipc=host'
        }
    }

    options {
        timeout(time: 60, unit: 'MINUTES')
        ansiColor('xterm')
    }


    /// Here Risk Based Strategy is Used stages ----> then stage inside the stages tag run in sequence ) 

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm ci'
            }
        }

        stage('Run High-Risk Tests') {
            steps {
                echo 'Executing High-Priority/Critical Tests...'
                // If this fails, the stage fails and the pipeline stops immediately
                sh 'npx playwright test --grep "@high"'
            }
        }

        stage('Run Medium-Risk Tests') {
            steps {
                echo 'High-risk tests passed. Executing Medium-Priority Tests...'
                sh 'npx playwright test --grep "@medium"'
            }
        }

        stage('Run Low-Risk Tests') {
            steps {
                echo 'Medium-risk tests passed. Executing Low-Priority Tests...'
                sh 'npx playwright test --grep "@low"'
            }
        }
    }

    // This post Requirement 

    post {
        always {
            echo 'Publishing Playwright HTML Report...'
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                reportTitles: 'Risk-Based Test Run Results'
            ])
        }
        failure {
            echo 'Pipeline failed! Check the HTML report or trace files for details.'
        }
    }
}