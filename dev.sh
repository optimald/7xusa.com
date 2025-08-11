#!/bin/bash

# Kill any existing process on port 3000
echo "🔄 Killing any existing processes on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Wait a moment for the port to be freed
sleep 1

# Start the development server
echo "🚀 Starting 7xusa.com development server on port 3000..."
npm run dev 