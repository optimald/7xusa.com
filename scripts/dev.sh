#!/bin/bash

# 7xusa.com Development Script
# Runs the Next.js app on port 3005

echo "🚀 Starting 7xusa.com development server on port 3005..."

# Kill any existing process on port 3005
echo "🔄 Killing any existing processes on port 3005..."
lsof -ti:3005 | xargs kill -9 2>/dev/null || true

# Wait a moment for the port to be freed
sleep 1

# Check if port 3005 is now free
if lsof -i:3005 >/dev/null 2>&1; then
    echo "❌ Port 3005 is still in use. Trying more aggressive cleanup..."
    pkill -f "next dev.*3005" 2>/dev/null || true
    sleep 2
fi

# Start the development server on port 3005
echo "✅ Starting Next.js development server..."
npm run dev -- -p 3005
