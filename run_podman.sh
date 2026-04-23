#!/bin/sh

IMAGE="docker.io/library/node:18.20.8-slim"
CONTAINER_NAME="react-essentials"
PORT=5173

# Run the container
podman run -it --rm \
  --name "$CONTAINER_NAME" \
  -p "$PORT:$PORT" \
  -v "$(pwd):/app:Z" \
  -w /app \
  "$IMAGE" \
  sh -c "npm install && npm run dev -- --host"
