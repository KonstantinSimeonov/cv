#!/usr/bin/env bash

readonly ASSETS_DIR=web/public/main
readonly JS_DIR=scala-2.13/scalajs-bundler/main
readonly BUILD_DIR=build

rm -rf build
sbt 'assets; webPipeline; fullOptJS::webpack'
mkdir -p $BUILD_DIR/target/{$ASSETS_DIR,$JS_DIR}
cp index.html $BUILD_DIR
cp "target/$ASSETS_DIR/styles.css" "$BUILD_DIR/target/$ASSETS_DIR"
cp "target/$ASSETS_DIR/"*.{png,jpg,gif,json} "$BUILD_DIR/target/$ASSETS_DIR"
cp "target/$JS_DIR/scalacv-opt-bundle.js" "$BUILD_DIR/target/$JS_DIR/scalacv-fastopt-bundle.js"
cp Procfile "$BUILD_DIR"

go build server.go
cp server "$BUILD_DIR"
