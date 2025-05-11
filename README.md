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

8. **Using Git for Collaboration**  
   - Clone the repository:
     `git clone git@github.com:your-org-or-username/LumiThrive.git`
     Then navigate to the project directory:
     `cd LumiThrive`
   - Checkout the branch named after your E-number (e.g., `e19087`):
     `git checkout e19087`
   - Push your updated code to your branch:
     `git add .`
     `git commit -m "Your meaningful commit message"`
     `git push origin e19087`
   - Create a pull request (PR) from your branch to the `main` branch on GitHub.
   - **Do not merge your PR into `main` without approval from another team member.**
