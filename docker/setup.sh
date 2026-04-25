#!/bin/bash
set -euo pipefail

InstallBuildAndPack () {
  cd ..
  pnpm i
  pnpm build
}

CreateDefaultFolders() {
  cd docker
  mkdir app
  cd app
}

CopyPnpm () {
  cp ../../package.json ./
  cp ../../pnpm-lock.yaml ./
}

InstallBuildAndPack
CreateDefaultFolders
CopyPnpm
