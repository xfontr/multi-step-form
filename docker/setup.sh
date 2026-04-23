#!/bin/bash
set -euo pipefail

InstallBuildAndPack () {
  cd ..
  pnpm i
  pnpm build
  pnpm pack
}

CreateDefaultFolders() {
  cd docker
  mkdir app
  mkdir app/packages
  cd app
}

CopyPnpmAndTgz () {
  cp ../packages/*.tgz ./
  cp ../package.json ./
  cp ../pnpm-lock.yaml ./
}

UnpackAndCleanUp () {
  for pkg in *.tgz; do
    base=$(basename "$pkg" .tgz)
    name="${base#portfolio-}"
    tar -xvzf "$pkg"
    mv package "packages/$name"
    rm "../packages/$pkg"
    rm "$base.tgz"
  done
}

InstallBuildAndPack
CreateDefaultFolders
CopyPnpmAndTgz
UnpackAndCleanUp