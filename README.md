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
  

# Modeling

The LumiThrive application uses a multimodal fusion framework to detect depression from audio, video, text, and optional clinical features. The modeling pipeline is built using Python and trained using PyTorch and scikit-learn.


**Modality	Tools Used	Features**

   -Text	NLTK, HuggingFace Transformers	Word embeddings, sentiment scores, LIWC features
   
   -Audio	OpenSMILE	MFCCs, pitch, prosody, jitter, shimmer
   
   -Video	OpenFace	Facial Action Units (FAUs), eye gaze, head movement
   
   -Clinical	Manual or automated survey data	PHQ-9 score, sleep pattern, medication usage

**Model Architecture**

The application supports the following modeling strategies:

1.**Early Fusion Model**
   
      -Input: Concatenated feature vectors from all available modalities
      
      -Model: MLP (Multi-Layer Perceptron)
      
      -Loss Function: Binary Cross Entropy (for classification) or MSE (for regression)
      
      -Use Case: When all modalities are present and aligned

2.**Attention-Based Fusion**
      
   -Input: Independent modality encoders (e.g., BERT for text, CNN for video)
   
   -Fusion Layer: Cross-modal attention mechanism
   
   -Output Layer: Fully-connected layers with softmax or sigmoid
   
   -Advantage: Dynamically learns which modality is more important per instance

3.**Modality Dropout / Robust Fusion**
   
   -Uses modality dropout during training to simulate missing modalities
   
   -Trained to be resilient to incomplete inputs at inference time
   
   -Can degrade gracefully with one or more missing modalities

4.**Training Workflow**

   -bash
   -Copy
   -Edit

# Setup Python environment

   -conda create -n lumi_model python=3.10
   -conda activate lumi_model
   -pip install -r requirements.txt

# Run training script

   -python train_model.py --config configs/early_fusion.yaml
   
   -Trained models are saved to the /backend/models/ folder and automatically loaded during deployment.

**Inference Flow**

   -User uploads a recording (video/audio) or completes a clinical form
   
   -The frontend sends it to the backend API
   
   -The backend extracts features and sends them to the selected model
   
   -The model returns a depression likelihood score (0–1) or classification label (e.g., "depressed" / "not depressed")
   
   -The result is visualized in the dashboard

**Model Evaluation**

   Metric	Value
   -Accuracy (depending on modality availability)
   -F1 Score	
   -AUC-ROC	
   -MAE (regression)	

**Notes**
   -Models are trained on the DAIC-WOZ dataset
   
   -Supports model hot-swapping and fine-tuning
   
   -Can be extended to use real-time webcam/audio stream processing
