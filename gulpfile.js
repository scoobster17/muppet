/**
 * Gulpfile for muppet mapping project
 */

'use strict';

/* ************************************************************************** */

/* GULP CONFIG */

/**
 * Dependencies
 */

// gulp itself
var gulp = require('gulp');

// css
var sass = require('gulp-sass');

// js
var babel = require('gulp-babel');

// compilation utilities
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

/* ************************************************************************** */

/* CSS */

/**
 * Task to compile Sass
 */
gulp.task('sass', function() {
	return gulp.src('./app/css/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/css'));
});

/* ************************************************************************** */

/* JS */

// to add source maps

gulp.task("js", function () {
  return gulp.src("app/js/map.babel.js")
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest("app/js"));
});

/* ************************************************************************** */

/* PROCESSING */

/**
 * Task to watch for changes in files and trigger events
 */
gulp.task('watch', function() {
	watch(['app/css/**/*.scss'], function() {
		gulp.start('sass');
	});
	watch(['app/js/**/*.babel.js'], function() {
		gulp.start('js');
	});
});
