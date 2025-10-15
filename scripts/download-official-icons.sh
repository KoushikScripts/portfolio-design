#!/bin/bash

echo "📥 Downloading official skill icons..."

# Create skills directory if it doesn't exist
mkdir -p public/skills

# Download official logos (these are from CDNs and official sources)
echo "Downloading Python logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" -o "temp-icons/python-official.svg"

echo "Downloading TensorFlow logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" -o "temp-icons/tensorflow-official.svg"

echo "Downloading Kubernetes logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" -o "temp-icons/kubernetes-official.svg"

echo "Downloading Git logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" -o "temp-icons/git-official.svg"

echo "Downloading OpenCV logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" -o "temp-icons/opencv-official.svg"

echo "Downloading PyTorch logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" -o "temp-icons/pytorch-official.svg"

echo "Downloading Pandas logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" -o "temp-icons/pandas-official.svg"

echo "Downloading NumPy logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" -o "temp-icons/numpy-official.svg"

echo "Downloading Jupyter logo..."
curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" -o "temp-icons/jupyter-official.svg"

echo "✅ Download complete!"
echo "📁 Official SVGs saved to temp-icons/"

# List downloaded files
echo "📋 Downloaded files:"
ls -la temp-icons/*-official.svg 2>/dev/null || echo "No files downloaded - check internet connection"

echo ""
echo "🔧 Next steps:"
echo "1. Run: ./scripts/setup-skill-icons.sh (to convert SVGs to PNGs)"
echo "2. Or manually convert the SVG files to PNG format"
echo "3. Update constants/index.ts to use the new image names"