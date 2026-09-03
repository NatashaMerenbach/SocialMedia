#!/usr/bin/env bash
set -euo pipefail

# Usage:
# 1) Set ANDROID_SDK_ROOT environment variable, then run: ./scripts/setup-android-sdk.sh
# 2) Or pass the SDK path as first argument: ./scripts/setup-android-sdk.sh /path/to/sdk

SDK_PATH="${1:-${ANDROID_SDK_ROOT:-${ANDROID_HOME:-}}}"

if [ -z "$SDK_PATH" ]; then
  echo "Error: Android SDK path not provided. Set ANDROID_SDK_ROOT or ANDROID_HOME, or pass path as first arg."
  echo "Example (macOS): ./scripts/setup-android-sdk.sh /Users/yourname/Library/Android/sdk"
  exit 1
fi

TARGET_FILE="android/local.properties"

mkdir -p "$(dirname "$TARGET_FILE")"
echo "sdk.dir=$SDK_PATH" > "$TARGET_FILE"
echo "Wrote $TARGET_FILE with sdk.dir=$SDK_PATH"
