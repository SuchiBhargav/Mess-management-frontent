pipeline {
    environment{
        imageName=""
    }
    agent any

    stages {
        stage('Git Build') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'master', url: 'https://github.com/SuchiBhargav/messmanagement-frontent-new-.git'
            }

        }
        stage('Build') {
            steps {
                script{
                    echo 'Building'
                }
            }

        }
         stage('Docker Build To Image') {
            steps {
              script{
                  imageName =docker.build 'suchibhargav/mess_management_frnt:latest'
              }
            }

         }
         stage('Push Docker Image') {
            steps {
                script{
                    docker.withRegistry('','docker-jenkins'){
                    imageName.push()
                    }
                }
            }

         }
       

    }
}
