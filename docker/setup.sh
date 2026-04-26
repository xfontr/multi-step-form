#!/bin/bash
set -euo pipefail

InstallAndBuild () {
  cd ..
  pnpm i
  pnpm build
}

CreateDefaultFolders() {
  cd docker
  mkdir app

  cd app
  mkdir -p .husky
  mkdir -p .output
}

CopyRequiredFiles () {
  cp ../../package.json ./
  cp ../../pnpm-lock.yaml ./
  cp -r ../../.output ./
  cp ../../.husky/install.mjs ./.husky/
}

InstallAndBuild
CreateDefaultFolders
CopyRequiredFiles
