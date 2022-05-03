# Copyright 2022 Harness Inc. All rights reserved.
# Use of this source code is governed by the PolyForm Shield 1.0.0 license
# that can be found in the licenses directory at the root of this repository, also available at
# https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.

# Disable NextJS tracking
export NEXT_TELEMETRY_DISABLED=1

# Get version from package.json
export VERSION=$(awk '/version/{gsub(/("|",)/,"",$2);print $2};' package.json)

# Exit when any command fails
set -e

echo @harness:registry=https://npm.pkg.github.com > ~/.npmrc
echo always-auth=true >> ~/.npmrc

# Create a new branch like v1.0.1
git checkout -b v$VERSION

# Build
yarn build

# Force adding ./dist into git because it's in .gitignore
git add -f ./dist/*
git commit . -m"Release version: v$VERSION"



echo "Publishing... v$VERSION"
npm publish
