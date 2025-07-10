# Multimodal Depression Detection System
## Feature Extraction Guide

### **Dataset Information**
- **Dataset**: E-DAIC (Extended Distress Analysis Interview Corpus)
- **Target Variable**: PHQ_Binary (0 = Not Depressed, 1 = Depressed)
- **Data Type**: Semi-clinical interviews with virtual interviewer "Ellie"

---

## **Feature Extraction Methods**

### **TEXT FEATURE EXTRACTION**
```python
# Single model approach for comprehensive text understanding
general_text_features = RoBERTa(transcript)  # 768 dimensions
```

**Implementation:**
```python
from transformers import AutoTokenizer, AutoModel

# Load RoBERTa model
roberta_tokenizer = AutoTokenizer.from_pretrained("roberta-base")
roberta_model = AutoModel.from_pretrained("roberta-base")

# Extract text features
text_features = roberta_model(transcript_text)  # 768 dimensions
```

**Why RoBERTa:**
- State-of-the-art contextual understanding
- Captures semantic relationships and emotional patterns
- Pre-trained on large text corpora
- Robust performance for depression detection

---

### **CLINICAL FEATURE EXTRACTION**
```python
# Extract from same transcript using MentalBERT
clinical_features = MentalBERT(transcript)  # 768 dimensions
```

**Implementation:**
```python
from transformers import AutoTokenizer, AutoModel

# Load MentalBERT model
mental_tokenizer = AutoTokenizer.from_pretrained("mental/mental-bert-base-uncased")
mental_model = AutoModel.from_pretrained("mental/mental-bert-base-uncased")

# Extract clinical features
clinical_features = mental_model(transcript_text)  # 768 dimensions
```

**Clinical Indicators Captured:**
- Symptom mentions (sleep problems, appetite changes, fatigue)
- Mood descriptors (sad, hopeless, anxious, irritable)
- Cognitive patterns (memory issues, concentration problems)
- Behavioral changes (social withdrawal, activity reduction)
- Severity indicators (frequency words like "always", "never", "sometimes")

---

### **AUDIO FEATURE EXTRACTION**
```python
# Use E-DAIC provided features
audio_features = [
    eGeMAPS_features,    # 88 dimensions
    MFCC_features        # 39 dimensions
]
# Total: 127 dimensions
```

**Feature Details:**

#### **eGeMAPS Features (88 dimensions)**
- **Description**: Extended Geneva Minimalistic Acoustic Parameter Set
- **Content**: Spectral, cepstral, prosodic, and voice quality information
- **File**: `XXX_OpenSMILE2.3.0_egemaps.csv`

#### **MFCC Features (39 dimensions)**
- **Description**: Mel-Frequency Cepstral Coefficients
- **Content**: MFCCs 1-13 + first and second order derivatives
- **File**: `XXX_OpenSMILE2.3.0_mfcc.csv`

---

### **VISUAL FEATURE EXTRACTION**
```python
# Use E-DAIC provided features
visual_features = [
    OpenFace_AUs,        # 17 facial action units + confidence
    CNN_ResNet_features  # Deep visual representations
]
# Total: ~500+ dimensions
```

**Feature Details:**

#### **OpenFace Features**
- **Description**: Facial Action Units (AUs) intensities
- **Content**: 17 FAUs + confidence measures per video frame
- **File**: `XXX_OpenFace2.1.0_Pose_gaze_AUs.csv`

#### **CNN ResNet Features**
- **Description**: Deep visual representations from ResNet-50
- **Content**: Output of first FC layer from aligned face images
- **File**: `XXX_CNN_ResNet.mat`

---

## **Complete System Architecture**

### **Feature Vector Composition:**
```python
multimodal_features = concatenate([
    RoBERTa_embeddings,          # 768 dimensions
    MentalBERT_embeddings,       # 768 dimensions
    eGeMAPS_features,            # 88 dimensions
    MFCC_features,               # 39 dimensions
    OpenFace_AUs,                # 17 dimensions
    CNN_ResNet_features          # 512 dimensions
])

# Total: ~2192 dimensions
# Target: PHQ_Binary (0/1)
```


## **Implementation Steps**

### **Phase 1: Text Processing**
1. Load RoBERTa and MentalBERT models
2. Extract features from transcript files
3. Save embeddings for each participant

### **Phase 2: Audio Processing**
1. Load eGeMAPS and MFCC feature files
2. Align with participant IDs
3. Handle missing values if any

### **Phase 3: Visual Processing**
1. Load OpenFace AU features
2. Load CNN ResNet features
3. Temporal alignment with audio/text

### **Phase 4: Feature Fusion**
1. Concatenate all modality features
2. Normalize feature scales
3. Handle dimensionality if needed

### **Phase 5: Model Training**
1. Split data (train/dev/test as provided)
2. Train multimodal classifier
3. Evaluate on PHQ_Binary prediction

---

## **Expected Performance Benefits**

- **Text (RoBERTa)**: Captures general language patterns and emotional context
- **Clinical (MentalBERT)**: Identifies depression-specific linguistic markers
- **Audio**: Detects vocal biomarkers of depression (prosody, voice quality)
- **Visual**: Captures facial expressions and micro-expressions
- **Multimodal Fusion**: Complementary information across modalities

---

## **Key Considerations**

1. **Feature Dimensionality**: ~2192 total dimensions - may need dimensionality reduction
2. **Computational Cost**: Running multiple deep models
3. **Data Alignment**: Ensure temporal synchronization across modalities
4. **Preprocessing**: Normalize features before fusion
5. **Evaluation**: Use E-DAIC provided train/dev/test splits

---
