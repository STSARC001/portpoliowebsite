#!/bin/bash

# This is a custom build script for Vercel deployment
echo "Building the React application..."
npm install
npx vite build