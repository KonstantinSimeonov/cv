#! /bin/bash

BUILD_DIR="./build"
LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B)

yarn build:prod
cd "$BUILD_DIR"
git init
git add .
git commit -m "$LAST_COMMIT_MESSAGE"
~/.node_modules/bin/heroku git:remote -a simeonov-resume
git push -f heroku master
