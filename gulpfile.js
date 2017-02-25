'use strict';

const gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    minifyCss = require('gulp-clean-css'),
    copy = require('gulp-copy'),
    clean = require('gulp-clean'),
    imageResize = require('gulp-image-resize'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    nib = require('nib');

const BUILD_DIR = './build',
    IMG_SIZE = 80; // px

gulp.task('clean', () => gulp.src(BUILD_DIR, { read: false }).pipe(clean()));

gulp.task('bundle', () => gulp
    .src('./src/*.html')
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

gulp.task('copy', () => gulp.src([
    './src/package.json',
    './src/Procfile',
    './src/app.js',
    './src/resume.pdf',
    './src/public/data/data.json',
    './src/public/assets/photo.jpg',
    './src/public/assets/favicon.ico',
    './src/public/assets/cv-background.png',
    './src/public/templates/*.handlebars',
    './src/public/components/handlebars/handlebars.min.js',
    './src/public/components/jquery/dist/jquery.min.js'
]).pipe(copy(BUILD_DIR, { prefix: 1 })));

gulp.task('default', ['styles' ,'bundle', 'resize', 'copy']);
