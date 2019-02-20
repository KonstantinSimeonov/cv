#!/usr/bin/env bash

readonly BUILD_DIR="./build"
readonly LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B)

yarn global add heroku
yarn build:prod
cd "$BUILD_DIR"
git init
git add .
git commit -m "$LAST_COMMIT_MESSAGE"
heroku git:remote -a simeonov-resume
git push -f heroku master
