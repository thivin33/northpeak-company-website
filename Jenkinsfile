pipeline {

```
agent any

stages {

    stage('Clone') {
        steps {
            echo 'Cloning Repository...'
            checkout scm
        }
    }

    stage('Build Docker Image') {
        steps {
            echo 'Building Docker Image...'
            bat 'docker build -t northpeak-website .'
        }
    }

    stage('List Docker Images') {
        steps {
            bat 'docker images'
        }
    }

}

post {

    success {
        echo 'Pipeline Successful!'
    }

    failure {
        echo 'Pipeline Failed!'
    }

}
```

}
