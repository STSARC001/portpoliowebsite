#!/bin/bash

# This is a custom build script for Vercel deployment
echo "Starting custom build process for Vercel deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the frontend
echo "Building the React application with Vite..."
npx vite build

# Copy HTML to correct location
echo "Organizing build output..."
cp dist/index.html index.html

echo "Build process completed successfully!"