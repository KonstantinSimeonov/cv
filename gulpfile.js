'use strict';

const gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    minifyCss = require('gulp-clean-css'),
    gulpCopy = require('gulp-copy'),
    gulpClean = require('gulp-clean');

const BUILD_DIR = './build';

gulp.task('clean', () => gulp.src(BUILD_DIR, { read: false }).pipe(gulpClean()));

gulp.task('bundle', () => gulp
    .src('./src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', babel({ presets: ['es2015'] })))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('copy', () => gulp.src([
    './src/package.json',
    './src/Procfile',
    './src/app.js',
    './src/resume.pdf',
    './src/public/data/data.json',
    './src/public/assets/*',
    './src/public/templates/*.handlebars',
    './src/public/components/handlebars/handlebars.min.js',
    './src/public/components/jquery/dist/jquery.min.js'
]).pipe(gulpCopy(BUILD_DIR, { prefix: 1 })));

gulp.task('default', ['bundle', 'copy']);
