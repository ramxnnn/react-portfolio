#!/bin/bash

# Variables
SSH_KEY_PATH="/home/coder/workspace/ssh/id_rsa_private"
REMOTE_HOST="ubuntu@132.145.110.4"
LOCAL_PROJECT_DIR="/home/coder/workspace/projects/react-portfolio"
REMOTE_DEST_DIR="/var/www/ramxn.com"
BUILD_DIR="$LOCAL_PROJECT_DIR/dist"
sudo chmod 600 $SSH_KEY_PATH

# Step 1: Navigate to the project directory
echo "Navigating to project directory..."
cd $LOCAL_PROJECT_DIR || { echo "Project directory not found"; exit 1; }

# Step 2: Install dependencies
echo "Installing dependencies..."
npm install || { echo "npm install failed"; exit 1; }

# Step 3: Build the project
echo "Building the project..."
npm run build || { echo "npm run build failed"; exit 1; }

# Step 4: Copy build to remote server
echo "Copying build folder to remote server..."
scp -i $SSH_KEY_PATH -o StrictHostKeyChecking=no -r $BUILD_DIR $REMOTE_HOST:$REMOTE_DEST_DIR || { echo "SCP failed"; exit 1; }


echo "Deployment completed successfully!"


