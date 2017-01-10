#!/bin/bash

BUILD_DIR="../cv-build"

if [ ! -d "$BUILD_DIR" ]; then
mkdir "$BUILD_DIR"
fi

rsync -arP src/* "$BUILD_DIR" --exclude=styles --exclude=scripts --exclude=node_modules

gulp bundle

cd "$BUILD_DIR"
npm install --production