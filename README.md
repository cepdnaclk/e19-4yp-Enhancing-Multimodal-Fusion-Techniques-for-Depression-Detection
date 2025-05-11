# Application Deployment

Follow these steps to run the LumiThrive project on your machine:

1. **Install Docker Desktop**  
   - Download Docker Desktop from the [official website](https://www.docker.com/products/docker-desktop) and install it on your machine.

2. **Enable Kubernetes Cluster**  
   - Open Docker Desktop and navigate to `Settings` -> `Kubernetes`.
   - Enable the Kubernetes cluster and wait for it to finish setting up.

3. **Navigate to LumiThrive Folder**  
   - Open your terminal and navigate to the `LumiThrive` folder where the project files are located:
   cd /path/to/LumiThrive like that

4. **Make the deploy.sh Script Executable**  
    - Run the following command
    'chmod +x deploy.sh'

5. **Run the Deployment Script**  
    - Run the following command 
    './deploy.sh'

6. **Access the Frontend**  
    - After the deployment is complete, you can access the frontend by visiting:
    'http://localhost:80'

7. **Access the Backend**
    - You can use the following backend URL:
    'http://backend:4000'
