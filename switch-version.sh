#!/bin/bash

# Version Switcher Script for Stone Shop
# Usage: ./switch-version.sh [production|staging]

VERSION=$1

if [ -z "$VERSION" ]; then
    echo "🚀 Stone Shop Version Switcher"
    echo ""
    echo "Usage: ./switch-version.sh [production|staging]"
    echo ""
    echo "Available versions:"
    echo "  production - Phiên bản chính thức (giao diện cũ)"
    echo "  staging    - Phiên bản thử nghiệm (giao diện mới)"
    echo ""
    echo "Current branch: $(git branch --show-current)"
    exit 1
fi

case $VERSION in
    "production")
        echo "🏭 Switching to Production version..."
        git checkout production
        echo "✅ Switched to Production branch"
        echo "📱 Features: Stable interface, no debug mode"
        echo "🌐 Use this for: Live production deployment"
        ;;
    "staging")
        echo "🧪 Switching to Staging version..."
        git checkout staging
        echo "✅ Switched to Staging branch"
        echo "📱 Features: New interface, debug mode, version banner"
        echo "🌐 Use this for: Testing new features"
        ;;
    *)
        echo "❌ Invalid version: $VERSION"
        echo "Available versions: production, staging"
        exit 1
        ;;
esac

echo ""
echo "📂 Current branch: $(git branch --show-current)"
echo "📋 To see differences: git diff production staging"
echo "🚀 To deploy: Follow instructions in DEPLOYMENT.md"