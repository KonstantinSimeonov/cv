'use strict';

const gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    minifyCss = require('gulp-clean-css');

gulp.task('bundle', () => gulp
                            .src('./src/*.html')
                            .pipe(useref())
                            .pipe(gulpif('*.js', babel({ presets: ['es2015'] })))
                            .pipe(gulpif('*.js', uglify()))
                            .pipe(gulpif('*.css', minifyCss()))
                            .pipe(gulp.dest('../cv-build')));