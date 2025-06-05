// Jenkinsfile for building and testing a Node.js application
pipeline {
    agent any
    environment {
        NODE_VERSION = '14' // Specify the Node.js version
    }
    tools {
        nodejs "${NODE_VERSION}" // Use the Node.js tool defined in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                git 'https://github.com/commanderphu/kit-portfolio.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Run tests using npm
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                // Build the application
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the application (this is a placeholder, replace with actual deployment steps)
                echo 'Deploying application...'
            }
        }
    }
    post {
        always {
            // Archive the build artifacts
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
            // Clean up workspace
            cleanWs()
        }
        success {
            // Notify success
            echo 'Build and tests succeeded!'
        }
        failure {
            // Notify failure
            echo 'Build or tests failed!'
        }
    }
}
// This Jenkinsfile defines a pipeline for building and testing a Node.js application.
// It includes stages for checking out the code, installing dependencies, running tests, building the application, and deploying it.
// The post section handles archiving artifacts and cleaning up the workspace, as well as notifications for success or failure.
// Make sure to replace the deployment step with actual commands relevant to your deployment process.
// Adjust the Node.js version and repository URL as needed for your project.
// Ensure that the Node.js tool is configured in Jenkins under "Global Tool Configuration".
// This pipeline can be triggered automatically on code changes or manually as needed.
