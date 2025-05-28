---
layout: home
permalink: index.html

repository-name: e19-4yp-Enhancing-Multimodal-Fusion-Techniques-for-Depression-Detection
title: Enhancing Multimodal Fusion Techniques for Depression Detection
---


# Enhancing Multimodal Fusion Techniques for Depression Detection


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

- Text-based detection using LSTM, BERT, GPT.
- Audio-based detection with CNNs, LSTMs, Wav2Vec.
- Video-based detection with CNN, ResNet-50.
- Clinical data use from MIMIC-III, leveraging medical history and notes.
- Limitations include lack of emotional depth, generalization, and bias handling.
- Existing multimodal models often rely on limited datasets and early/late fusion.

## Methodology


## Model Architecture

Below are the architectural diagrams of our proposed multimodal fusion models:

### 1. Early Fusion Model Architecture

![Early Fusion Model Architecture](./images/early_fusion_model.png)

*Figure 1: The Early Fusion model combines features from all modalities (such as audio, video, and text) at the input level before feeding them into a unified deep learning model. This approach allows the model to learn joint representations from the start, potentially capturing complex inter-modal relationships.*

### 2. Late Fusion Model Architecture

![Late Fusion Model Architecture](./images/late_fusion_model.png)

*Figure 2: The Late Fusion model processes each modality independently through separate models and combines their outputs at the decision level. This enables each modality to contribute its own prediction before the final decision is made, allowing for more specialized feature extraction per modality.*


## Experiment Setup and Implementation

- Model architectures using fully connected layers and target-level fusion.
- Emphasis on extracting deep multimodal features for better performance.
- Plan to develop a web-based counselor channeling app with chatbot-driven detection and optional user data contribution.

## Results and Analysis

(Results to be updated after experimentation phase.)

## Conclusion

This research is expected to yield a clinically usable model with enhanced accuracy in depression detection, leveraging deep multimodal feature fusion and enriched datasets.

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

