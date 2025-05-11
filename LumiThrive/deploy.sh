#!/bin/bash

# Set image names
BACKEND_IMAGE=lumi-backend:latest
FRONTEND_IMAGE=lumi-frontend:latest

# Build Docker images
echo "🔧 Building backend image..."
docker build -t $BACKEND_IMAGE ./backend

echo "🔧 Building frontend image..."
docker build -t $FRONTEND_IMAGE ./frontend

# Uninstall existing Helm release if any
echo "🧹 Cleaning previous release (if any)..."
helm uninstall lumi-thrive 2>/dev/null

# Install Helm chart
echo "🚀 Deploying Helm chart..."
helm install lumi-thrive ./lumi-thrive

echo "✅ Deployment complete. Use 'kubectl get pods' to verify."
