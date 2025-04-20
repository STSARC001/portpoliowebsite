#!/bin/bash

# This is a custom build script for Vercel deployment
echo "Starting custom build process for Vercel deployment..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the frontend with vercel-specific config
echo "Building the React application with Vite using Vercel config..."
npx vite build --config vite.config.vercel.js

# Create output structure that Vercel can understand
echo "Organizing build output for Vercel..."
# Ensure static assets are properly organized
mkdir -p dist/client/src
cp -r client/src/assets dist/client/src/ 2>/dev/null || true

echo "Build process completed successfully!"