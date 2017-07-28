'use strict';

const gulp = require('gulp');
const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const minifyCss = require('gulp-clean-css');
const copy = require('gulp-copy');
const clean = require('gulp-clean');
const imageResize = require('gulp-image-resize');
const jsonminify = require('gulp-jsonminify');
const stylus = require('gulp-stylus');
const watch = require('gulp-watch');
const nib = require('nib');

const BUILD_DIR = './build',
    IMG_SIZE = 80; // px

gulp.task('clean', () => gulp.src(BUILD_DIR, { read: false }).pipe(clean()));

gulp.task('bundle', ['styles'], () => gulp
    .src('./src/public/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', babel({ presets: ['es2015'] })))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest(BUILD_DIR)));

gulp.task('resize', () => gulp
    .src('./src/public/assets/*-icon*')
    .pipe(imageResize({
        height: IMG_SIZE,
        width: IMG_SIZE,
        crop: false,
        upscale: false
    }))
    .pipe(gulp.dest(`${BUILD_DIR}/public/assets/`)));

gulp.task('styles', () => gulp
    .src('./src/public/styles/*.styl')
    .pipe(stylus({
        compress: true,
        use: nib()
    }))
    .pipe(gulp.dest('./src/public/styles/')));

gulp.task('watch-styles', () => watch('./src/public/styles/*.styl')
    .pipe(stylus({
        compress: true,
        use: nib()
    }))
    .pipe(gulp.dest('./src/public/styles/')));
// 
gulp.task('json', () => gulp
    .src('./src/public/data/data.json')
    .pipe(jsonminify())
    .pipe(gulp.dest(`${BUILD_DIR}/public/data/`)));

gulp.task('copy', () => gulp.src([
    './src/package.json',
    './src/Procfile',
    './src/app.js',
    './src/resume.pdf',
    './src/public/assets/photo.jpg',
    './src/public/assets/favicon.ico',
    './src/public/assets/cv-background.png',
    './src/public/templates/*.handlebars',
    './src/public/components/handlebars/handlebars.min.js',
    './src/public/components/jquery/dist/jquery.min.js'
]).pipe(copy(BUILD_DIR, { prefix: 1 })));

gulp.task('default', ['bundle', 'resize', 'json', 'copy']);
