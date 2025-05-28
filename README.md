# LumiThrive - Multimodal Depression Detection System

## Overview

LumiThrive is a cutting-edge application that leverages multimodal fusion techniques to detect depression using audio, video, text, and clinical data. The system employs advanced machine learning models built with PyTorch and scikit-learn to provide accurate depression assessment.

## Quick Start Guide

### Prerequisites

- Docker Desktop installed and running
- Git for version control
- Terminal/Command Line access

### Deployment Steps

#### 1. Install Docker Desktop

Download and install Docker Desktop from the [official website](https://www.docker.com/products/docker-desktop).

#### 2. Configure Kubernetes

1. Open Docker Desktop
2. Navigate to **Settings** → **Kubernetes**
3. Enable the Kubernetes cluster
4. Wait for the setup to complete

#### 3. Project Setup

```bash
# Navigate to the project directory
cd /path/to/LumiThrive

# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

#### 4. Access the Application

- **Frontend**: [http://localhost:80](http://localhost:80)
- **Backend API**: [http://backend:4000](http://backend:4000)

## Development Workflow

### Repository Management

#### Initial Setup
```bash
# Clone the repository
git clone git@github.com:your-org-or-username/LumiThrive.git

# Navigate to project directory
cd LumiThrive

# Checkout your development branch (using your E-number)
git checkout e19087
```

#### Development Cycle
```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add multimodal attention mechanism"

# Push to your branch
git push origin e19087
```

#### Code Integration
1. Create a Pull Request (PR) from your branch to `main`
2. **⚠️ Important**: Never merge to `main` without team approval
3. Request code review from team members
4. Address feedback before merging

## Machine Learning Architecture

### Supported Modalities

| Modality | Tools & Libraries | Extracted Features |
|----------|-------------------|-------------------|
| **Text** | NLTK, HuggingFace Transformers | Word embeddings, sentiment analysis, LIWC features |
| **Audio** | OpenSMILE | MFCCs, pitch variation, prosody, jitter, shimmer |
| **Video** | OpenFace | Facial Action Units (FAUs), eye gaze patterns, head movement |
| **Clinical** | Custom surveys | PHQ-9 scores, sleep patterns, medication history |

### Model Architectures

#### 1. Early Fusion Model
- **Input**: Concatenated feature vectors from all modalities
- **Architecture**: Multi-Layer Perceptron (MLP)
- **Loss Functions**: 
  - Binary Cross Entropy (classification)
  - Mean Squared Error (regression)
- **Best For**: Complete multimodal data scenarios

#### 2. Attention-Based Fusion
- **Input Processing**: Independent modality encoders
  - BERT for text processing
  - CNN for video analysis
- **Fusion Layer**: Cross-modal attention mechanism
- **Output**: Fully-connected layers with softmax/sigmoid activation
- **Advantage**: Dynamic importance weighting per modality

#### 3. Modality Dropout / Robust Fusion
- **Training Strategy**: Simulates missing modalities during training
- **Robustness**: Handles incomplete inputs gracefully
- **Deployment**: Maintains performance with missing modalities

### Training Pipeline

#### Environment Setup
```bash
# Create Python environment
conda create -n lumi_model python=3.10
conda activate lumi_model

# Install dependencies
pip install -r requirements.txt
```

#### Model Training
```bash
# Train with configuration file
python train_model.py --config configs/early_fusion.yaml

# Models are automatically saved to /backend/models/
```

### Inference Pipeline

1. **Data Input**: User uploads video/audio or completes clinical assessment
2. **API Processing**: Frontend sends data to backend API
3. **Feature Extraction**: Backend processes multimodal features
4. **Model Inference**: Selected model generates depression likelihood
5. **Result Delivery**: Score (0-1) or classification returned to dashboard
6. **Visualization**: Results displayed in user-friendly dashboard

### Model Performance

| Metric | Performance Range |
|--------|------------------|
| **Accuracy** | Varies by modality availability |
| **F1 Score** | Context-dependent |
| **AUC-ROC** | Model-specific |
| **MAE** | For regression tasks |

*Note: Specific performance metrics depend on the dataset and modality combinations used.*

## System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   ML Models     │
│   (React/Vue)   │◄──►│   (Flask/FastAPI)│◄──►│   (PyTorch)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   User Interface│    │   Feature       │    │   Model         │
│   Dashboard     │    │   Extraction    │    │   Repository    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Project Resources

### Official Links
- **Repository**: [GitHub - LumiThrive](https://github.com/cepdnaclk/e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection)
- **Project Page**: [Official Documentation](https://cepdnaclk.github.io/e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection/)

### Academic Affiliations
- **Department**: [Computer Engineering, University of Peradeniya](http://www.ce.pdn.ac.lk/)
- **University**: [University of Peradeniya, Faculty of Engineering](https://eng.pdn.ac.lk/)

## Contributing

We welcome contributions to improve LumiThrive! Please follow our development workflow and ensure all code is reviewed before merging to the main branch.

### Code Standards
- Write descriptive commit messages
- Follow Python PEP 8 style guidelines
- Include documentation for new features
- Test your changes thoroughly

### Support
For technical support or questions, please create an issue in the GitHub repository or contact the development team.

---

*LumiThrive - Advancing mental health through innovative AI solutions*
