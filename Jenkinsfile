pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Code downloaded from GitHub'
            }
        }

        stage('Docker Version') {
            steps {
                bat 'docker --version'
            }
        }

    }
}