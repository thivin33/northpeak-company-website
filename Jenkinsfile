pipeline {

```
agent any

stages {

    stage('Build Docker Image') {

        steps {

            bat 'docker build -t northpeak .'

        }

    }

    stage('Run Docker Container') {

        steps {

            bat 'docker stop northpeak-container || exit 0'

            bat 'docker rm northpeak-container || exit 0'

            bat 'docker run -d --name northpeak-container -p 8081:80 northpeak'

        }

    }

}
```

}
