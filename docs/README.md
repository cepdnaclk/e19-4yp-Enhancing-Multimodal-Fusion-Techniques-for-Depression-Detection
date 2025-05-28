---
layout: home
permalink: index.html

repository-name: e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection
title: Enhancing Multimodal Fusion Techniques for Depression Detection
---

# Enhancing Multimodal Fusion Techniques for Depression Detection

## Dual Objectives

- Develop a **multimodal deep learning model** for depression detection using CNN and fusion techniques.
- Build a **counselor channeling web application** integrated with chatbot-based depression screening.

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
4. [Model Architecture](#model-architecture)
5. [Experiment Setup and Implementation](#experiment-setup-and-implementation)
6. [Results and Analysis](#results-and-analysis)
7. [Conclusion](#conclusion)
8. [Publications](#publications)
9. [Links](#links)

---

## Abstract

The project aims to enhance depression detection using multimodal data fusion techniques by integrating text, audio, video, and clinical data. The approach addresses limitations in existing models such as lack of generalization and insufficient accuracy for clinical applications. By employing hybrid and target-level fusion mechanisms, the proposed model seeks to improve detection accuracy and provide a foundation for personalized treatment plans.

## Related works

- **Multimodal depression detection using CNNs** across text, audio, and video modalities.
- **Counselor channeling application** developed for screening and connecting users to professionals.
- Text-based detection using LSTM, BERT, GPT.
- Audio-based detection with CNNs, LSTMs, Wav2Vec.
- Video-based detection with CNN, ResNet-50.
- Clinical data use from MIMIC-III, leveraging medical history and notes.
- Limitations in existing works include lack of emotional depth, poor generalization, and bias handling.
- Previous fusion models relied mostly on early or late fusion with limited datasets.

## Methodology

We employ a multimodal deep learning framework combining CNNs and target-level fusion techniques. The workflow includes:

1. **Data Collection:** Using DAIC-WOZ and MIMIC-III datasets for text, audio, video, and clinical data.
2. **Feature Extraction:**
   - **Text:** Sentiment scores and linguistic features using LIWC and HuggingFace Transformers.
   - **Audio:** Acoustic features (pitch, MFCC, jitter) extracted using **EDIAOZ**.
   - **Video:** Facial Action Units and visual cues extracted via OpenFace.
   - **Clinical:** Medical notes and survey results embedded using **BioBERT**.
3. **Fusion Strategies:**
   - Early, late, and hybrid fusion approaches.
   - Target-level weighted fusion using learned modality importance.
4. **Modeling:**
   - CNN-based feature encoders per modality.
   - Attention-based fusion network to learn inter-modal dependencies.
   - Output as depression severity score or binary classification.

## Model Architecture

### 1. Early Fusion Model Architecture

![Early Fusion Model Architecture](./images/arc01.png)

*Figure 1: The Early Fusion model combines features from all modalities (such as audio, video, and text) at the input level before feeding them into a unified deep learning model. This approach allows the model to learn joint representations from the start, potentially capturing complex inter-modal relationships.*

### 2. Late Fusion Model Architecture

![Late Fusion Model Architecture](./images/arc02.png)

*Figure 2: The Late Fusion model processes each modality independently through separate models and combines their outputs at the decision level. This enables each modality to contribute its own prediction before the final decision is made, allowing for more specialized feature extraction per modality.*

## Experiment Setup and Implementation

- Built on Python using PyTorch, HuggingFace, and Scikit-learn.
- Model architectures use CNNs and attention-based fusion.
- Feature extraction and preprocessing performed using EDIAOZ, OpenFace, and BioBERT.
- Backend system integrates the trained model for inference.
- Web-based counselor channeling application developed using MERN stack.
- Chatbot-based screening integrates model inference for real-time analysis.

## Results and Analysis

(Results to be updated after experimentation phase.)

## Conclusion

This research is expected to yield a clinically usable model with enhanced accuracy in depression detection, leveraging deep multimodal feature fusion and enriched datasets. The complementary counselor channeling platform enhances accessibility to mental health support.

## Publications

<!-- Uncomment when available -->
<!-- 1. [Semester 7 report](./) -->
<!-- 2. [Semester 7 slides](./) -->
<!-- 3. [Semester 8 report](./) -->
<!-- 4. [Semester 8 slides](./) -->
<!-- 5. Dissanayaka M.A.S.R, Neranji W.K.G.A.G, Nishantha R.P.T. "Enhancing Multimodal Fusion Techniques for Depression Detection" (2025). [PDF](./) -->

## Links

- [Project Repository](https://github.com/cepdnaclk/e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection)
- [Project Page](https://cepdnaclk.github.io/e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)
