# Depression Detection Project

This project aims to enhance multimodal fusion techniques for depression detection using multiple data modalities such as text, audio, video, and clinical data. The project processes recorded interview sessions and extracts features from each modality to train machine learning models for accurate depression classification.

## Project Structure

```
depression-detection-model/
├── data/
│   ├── raw/                    # Original unmodified dataset
│   │   ├── 301_P/             # Patient 301 data
│   │   │   ├── audio/         # Audio files and features
│   │   │   ├── video/         # Video files and features
│   │   │   ├── clinical/      # Clinical data and transcripts
│   │   │   └── text/          # Text data and transcripts
│   │   └── 302_P/             # Patient 302 data
│   │       ├── audio/         # Audio files and features
│   │       ├── video/         # Video files and features
│   │       ├── clinical/      # Clinical data and transcripts
│   │       └── text/          # Text data and transcripts
│   ├── interim/               # Intermediate processed data and extracted features
│   │   ├── audio_features/    # Extracted audio features
│   │   ├── video_features/    # Extracted video features
│   │   ├── clinical_features/ # Processed clinical features
│   │   └── text_features/     # Extracted text features
│   └── processed/             # Fully preprocessed and merged dataset ready for model training
├── notebooks/                 # Jupyter notebooks for analysis and processing
│   ├── feature_extraction/    # Feature extraction notebooks
│   │   ├── audio_MFCC_extraction.ipynb
│   │   ├── audio_eGeMAPS_extraction.ipynb
│   │   ├── video_OpenFace_extraction.ipynb
│   │   ├── video_CNN_extraction.ipynb
│   │   ├── text_feature_extraction.ipynb
│   │   └── clinical_feature_extraction.ipynb
│   ├── 01_data_folder_structure.ipynb
│   ├── 02.data_preprocessing.ipynb
│   ├── 03.feature_fusion.ipynb
│   └── 04.model_training.ipynb
├── src/                       # Modular Python source code
│   ├── feature_extraction/    # Feature extraction modules
│   │   ├── audio/            # Audio feature extraction
│   │   │   ├── audio_MFCC_extraction.py
│   │   │   ├── audio_eGeMAPS_extraction.py
│   │   │   └── __init__.py
│   │   ├── video/            # Video feature extraction
│   │   │   ├── video_OpenFace_extraction.py
│   │   │   └── video_CNN_extraction.py
│   │   ├── clinical/         # Clinical feature extraction
│   │   ├── text/             # Text feature extraction
│   │   ├── extract_all.py    # Main extraction orchestrator
│   │   └── utils.py          # Utility functions
│   ├── preprocessing/        # Data preprocessing modules
│   ├── modeling/             # Model training and evaluation
│   ├── utils/                # General utility functions
│   └── docs/                 # Documentation files
├── config/                   # Configuration files
│   └── config.yaml          # Main configuration file
├── 01_create_folders.ipynb  # Initial setup notebook
├── setup.py                 # Setup script for packaging
└── README.md               # This file
```

## Directory Descriptions

### Data Organization
- **`data/raw/`**: Contains the original raw dataset files organized by patient ID (301_P, 302_P, etc.). Each patient folder contains:
  - **`audio/`**: Audio recordings and extracted features (OpenSMILE eGeMAPS, MFCC, VGG16, DenseNet201, BoAW)
  - **`video/`**: Video recordings and extracted features (OpenFace, CNN features from ResNet/VGG, BoVW)
  - **`clinical/`**: Clinical data and interview transcripts
  - **`text/`**: Text data and transcripts for NLP processing

- **`data/interim/`**: Contains intermediate processed files organized by modality:
  - **`audio_features/`**: Processed audio features ready for fusion
  - **`video_features/`**: Processed video features ready for fusion
  - **`clinical_features/`**: Processed clinical features ready for fusion
  - **`text_features/`**: Processed text features ready for fusion

- **`data/processed/`**: Contains the final merged and cleaned dataset combining all modalities, ready for model training

### Development and Analysis
- **`notebooks/`**: Contains Jupyter notebooks organized by functionality:
  - **`feature_extraction/`**: Specialized notebooks for each modality's feature extraction
  - Main pipeline notebooks for data preprocessing, feature fusion, and model training
  
- **`src/`**: Modular and reusable Python code organized by functionality:
  - **`feature_extraction/`**: Modality-specific feature extraction modules
  - **`preprocessing/`**: Data preprocessing utilities
  - **`modeling/`**: Model training and evaluation code
  - **`utils/`**: General utility functions
  - **`docs/`**: Code documentation

### Configuration Management
- **`config/`**: Configuration files (YAML) defining paths, hyperparameters, and other settings to avoid hardcoding

## Current Data Features

### Audio Features
- **OpenSMILE eGeMAPS**: Extended Geneva Minimalistic Acoustic Parameter Set
- **MFCC**: Mel-Frequency Cepstral Coefficients
- **Deep Learning Features**: VGG16 and DenseNet201 extracted features
- **BoAW**: Bag of Audio Words representations

### Video Features
- **OpenFace 2.1.0**: Facial landmarks, pose, gaze, and Action Units (AUs)
- **CNN Features**: ResNet and VGG extracted features
- **BoVW**: Bag of Visual Words representations

### Text Features
- **Transcripts**: Interview transcripts available for both clinical and text processing

### Clinical Features
- **Transcripts**: Clinical interview transcripts and associated metadata

## Getting Started

### Prerequisites
Ensure you have Python 3.8+ installed on your system.

### Installation
1. Clone this repository
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   Or using Conda:
   ```bash
   conda env create -f environment.yml
   conda activate depression-detection
   ```

### Initial Setup
Run the folder creation notebook to ensure proper directory structure:
```bash
jupyter notebook 01_create_folders.ipynb
```

## Features

- **Multimodal Data Processing**: Handles text, audio, video, and clinical data
- **Feature Extraction**: Automated feature extraction from multiple modalities using state-of-the-art methods
- **Modular Design**: Clean, reusable code structure with separate modules for each modality
- **Reproducible Results**: Configuration-based setup for consistent experiments
- **Comprehensive Feature Set**: Includes traditional features (MFCC, OpenFace) and deep learning features (CNN-based)

## Usage Pipeline

1. **Data Preparation**: Ensure raw data is properly organized in the `data/raw/` directory
2. **Feature Extraction**: Run individual feature extraction notebooks or use the main extraction script
3. **Data Preprocessing**: Clean and normalize extracted features
4. **Feature Fusion**: Combine features from different modalities
5. **Model Training**: Train and evaluate depression detection models

## File Naming Convention

The project follows a consistent naming convention:
- `{PatientID}_{FeatureType}_{Method}.{extension}`
- Examples:
  - `301_OpenSMILE2.3.0_egemaps.csv`
  - `302_CNN_ResNet.mat`
  - `301_OpenFace2.1.0_Pose_gaze_AUs.csv`

## Notes

- Raw data files should never be modified to preserve data integrity
- Each modality has dedicated processing pipelines
- Feature extraction can be run independently for each modality
- The project supports both traditional machine learning and deep learning approaches