pipeline {

```
agent any

stages {

    stage('Clone Repository') {
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
            echo 'Listing Docker Images...'
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
