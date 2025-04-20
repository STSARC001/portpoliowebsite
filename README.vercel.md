# Vercel Deployment Guide

This document contains specific instructions for deploying this portfolio website on Vercel.

## Deployment Steps

1. Connect your GitHub repository to Vercel
2. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. Environment Variables:
   - No specific environment variables are required for basic functionality

4. Deployment:
   - The main branch is recommended for production deployment
   - The portfolio is a static website that doesn't require server-side rendering

## Troubleshooting

If you encounter source code being displayed instead of the rendered website:
- Make sure the build command is correctly set to `npm run build`
- Verify that the output directory is set to `dist`
- Check that all routes in vercel.json are correctly configured
- Ensure the correct framework preset is selected (or set to null to use custom settings)

## Project Structure

- `/client`: Frontend React application
- `/server`: Backend Express server (not used in static deployment)
- `/attached_assets`: Static assets used in the portfolio
- `/dist`: Build output directory

## Contact

For further assistance, please contact:
- Abhijit Dengale, CEO at ZyraTech