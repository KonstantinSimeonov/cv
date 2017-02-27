#! /usr/bin/bash

BUILD_DIR="../cv-build"
LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B)

npm run build
rm -rf "$BUILD_DIR"
mv build "$BUILD_DIR"
cd "$BUILD_DIR"
git init
git add .
git commit -m "$LAST_COMMIT_MESSAGE"
heroku git:remote -a simeonov-resume
git push -f heroku master