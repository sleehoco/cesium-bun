#!/bin/bash

# Render Build Script for Cesium Bun Application
# This script handles the build process on Render

set -e

echo "🚀 Starting Cesium Bun build process..."

# Install Bun if not present
if ! command -v bun &> /dev/null; then
    echo "📦 Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    export BUN_INSTALL="$HOME/.bun"
    export PATH="$BUN_INSTALL/bin:$PATH"
fi

echo "📥 Installing dependencies..."
bun install --frozen-lockfile

echo "🔧 Running type check..."
bun run tsc --noEmit

echo "🧹 Running linting..."
bun run lint

echo "🏗️ Building application..."
bun run build

echo "✅ Build completed successfully!"
echo "🎯 Ready for deployment!"