pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "shobana96/devops-node-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/Shobana96/devops-pipeline-demo.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image $DOCKER_IMAGE || true'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker run -d -p 5000:5000 --name nodeapp $DOCKER_IMAGE'
            }
        }

        // stage('Kubernetes Deploy') {
        //     steps {
        //         sh 'kubectl apply -f k8s/deployment.yaml'
        //     }
        // }
    }

    post {
        always {
            echo "Pipeline execution completed"
        }
    }
}

