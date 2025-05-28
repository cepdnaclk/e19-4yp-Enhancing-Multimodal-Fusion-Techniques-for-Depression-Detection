---
layout: home
permalink: index.html

repository-name: e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection
title: Enhancing Multimodal Fusion Techniques for Depression Detection
---

# LumiThrive: Enhancing Multimodal Fusion Techniques for Depression Detection

#### Team

- E/19/087, Dissanayaka M.A.S.R, [email](mailto:e19087@eng.pdn.ac.lk)
- E/19/260, Neranji W.K.G.A.G, [email](mailto:e19260@eng.pdn.ac.lk)
- E/19/264, Nishantha R.P.T, [email](mailto:e19264@eng.pdn.ac.lk)

#### Supervisors

- Prof Roshan Rage, [email](mailto:roshanr@eng.pdn.ac.lk)
- Dhanushki Pavithya, [email](mailto:e14240@ce.pdn.ac.lk)

#### Table of content

1. [Abstract](#abstract)
2. [Related works](#related-works)
3. [Methodology](#methodology)
4. [Experiment Setup and Implementation](#experiment-setup-and-implementation)
5. [Results and Analysis](#results-and-analysis)
6. [Conclusion](#conclusion)
7. [Publications](#publications)
8. [Links](#links)

---

## Abstract

The LumiThrive application is designed to detect depression using a multimodal fusion framework combining text, audio, video, and clinical features. It leverages deep learning models to predict depression likelihood and provides visual insights through a web dashboard.

## Related works

<!-- Add literature review and related research here -->

## Methodology

### Modalities and Feature Extraction

| Modality | Tools Used | Features Extracted |
|----------|-------------|--------------------|
| **Text** | NLTK, HuggingFace Transformers | Word embeddings, sentiment scores, LIWC |
| **Audio** | OpenSMILE | MFCCs, pitch, prosody, jitter, shimmer |
| **Video** | OpenFace | Facial Action Units (FAUs), eye gaze, head movement |
| **Clinical** | Manual / survey data | PHQ-9 score, sleep pattern, medication usage |

### Model Architecture

#### 1. **Early Fusion**
- **Input**: Concatenated features from all modalities
- **Model**: Multi-Layer Perceptron (MLP)
- **Loss**: Binary Cross Entropy / MSE
- **Use Case**: All modalities available

#### 2. **Attention-Based Fusion**
- **Input**: Separate encoders (e.g., BERT, CNN)
- **Fusion**: Cross-modal attention
- **Output**: Softmax/Sigmoid layers
- **Advantage**: Learns modality importance dynamically

#### 3. **Robust Fusion with Modality Dropout**
- Handles missing modalities using dropout during training
- Resilient to incomplete inputs at inference time

## Experiment Setup and Implementation

### Application Deployment

Follow these steps to run the LumiThrive project locally:

1. **Install Docker Desktop**  
   Download and install from the official [Docker website](https://www.docker.com/).

2. **Enable Kubernetes Cluster**  
   In Docker Desktop:  
   `Settings -> Kubernetes -> Enable Kubernetes`

3. **Navigate to LumiThrive Folder**  
   ```bash
   cd /path/to/LumiThrive


## Links

[//]: # ( NOTE: EDIT THIS LINKS WITH YOUR REPO DETAILS )

- [Project Repository](https://github.com/cepdnaclk/e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection)
- [Project Page](https://cepdnaclk.github.io/e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # "Please refer this to learn more about Markdown syntax"
[//]: # "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
