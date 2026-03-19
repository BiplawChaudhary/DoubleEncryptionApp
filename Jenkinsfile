pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                echo 'Pulling source code from SCM...'
                checkout scm
            }
        }

        stage('Build, Kill, and Deploy') {
            steps {
                echo 'Executing the remote build/deploy script...'
                // --- CRITICAL CHANGE ---
                // Executing the script using the absolute path you specified.
                // The script will handle the Maven build, killing the old process, and starting the new one.

                sh '/home/rclserver/scripts/DoubleEncApp.sh'
            }
        }
    }

    post {
        success {
            echo ':white_check_mark: Pipeline and application restart completed successfully!'
        }
        failure {
            echo ':x: Pipeline failed! Check the script output for errors during kill/build/start.'
        }
    }
}
