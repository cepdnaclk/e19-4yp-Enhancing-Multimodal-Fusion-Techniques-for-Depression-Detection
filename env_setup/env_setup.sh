#!/bin/bash

ENV_NAME="depression-nlp-fyp"

echo "Checking if conda environment '$ENV_NAME' exists..."
if conda info --envs | grep -q "^$ENV_NAME[[:space:]]"; then
    echo "Conda environment '$ENV_NAME' already exists. Skipping creation."
else
    echo "Creating conda environment '$ENV_NAME' from environment.yml..."
    conda env create -f environment.yml
fi

echo "Activating conda environment '$ENV_NAME'..."
# Source conda to enable 'conda activate' in script
source "$(conda info --base)/etc/profile.d/conda.sh"
conda activate $ENV_NAME

echo "Installing/updating pip packages from requirements.txt..."
pip install -r requirements.txt
