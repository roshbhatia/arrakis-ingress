#!/bin/bash

# Define the source and target paths
SERVICE_FILE="arrakis-ingress.service"
SYSTEMD_DIR="/etc/systemd/system"

# Check if the service file exists
if [[ ! -f "$SERVICE_FILE" ]]; then
    echo "Service file $SERVICE_FILE not found!"
    exit 1
fi

# Create a symbolic link in the systemd directory
sudo ln -s "$(pwd)/$SERVICE_FILE" "$SYSTEMD_DIR/$SERVICE_FILE"

# Reload the systemd daemon to recognize the new service
sudo systemctl daemon-reload

# Enable the service to start on boot
sudo systemctl enable "$SERVICE_FILE"

# Start the service
sudo systemctl start "$SERVICE_FILE"

echo "Service $SERVICE_FILE has been linked, enabled, and started."
