/**
 * Gulpfile for muppet mapping project
 */

'use strict';

/* ************************************************************************** */

/* GULP CONFIG */

/**
 * Dependencies
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

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

/**
 * Task to watch for changes in Sass files and trigger the Sass compilation
 */
gulp.task('watch', function() {
	watch(['app/css/**/*.scss'], function() {
		gulp.start('sass');
	});
});