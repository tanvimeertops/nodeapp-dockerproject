
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vipulitinfra/nodeapp_demo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodeapp_demo:latest .'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d --build'
            }
        }

        stage('Verify App') {
            steps {
                sh 'sleep 10 && curl -f http://localhost:3000 || exit 1'
            }
        }
    }
}
