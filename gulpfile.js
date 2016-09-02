/**
 * Gulpfile for muppet mapping project
 */

'use strict';

/* ************************************************************************** */

/* GULP CONFIG */

/* Dependencies */

// gulp itself
var gulp = require('gulp');

// css
var sass = require('gulp-sass');

// js
var babel = require('gulp-babel');

// compilation utilities
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

// server
var spawn = require('child_process').spawn;

/* ************************************************************************** */

/* Variables */
var node;
var filePaths = {
	serverConfig: 'server/server.js'
}

/* ************************************************************************** */

/* CSS */

/**
 * Task to compile Sass
 */
gulp.task('sass', function() {
	return gulp.src('./app/src/css/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/dist/css'));
});

/* ************************************************************************** */

/* JS */

// to add source maps

gulp.task("js", function () {
  return gulp.src("./app/src/js/app.js")
    .pipe(babel())
    .pipe(gulp.dest("./app/dist/js"));
});

/* ************************************************************************** */

/* PROCESSING */

/**
 * Task to watch for changes in files and trigger events
 */
gulp.task('watch', function() {

	// watch for css changes
	watch(['app/src/css/**/*.scss'], function() {
		gulp.start('sass');
	});

	// watch for js changes
	watch(['app/src/js/**/*.babel.js'], function() {
		gulp.start('js');
	});

	// watch for server config changes
	watch(['server/server.js'], function() {
		gulp.start('server');
	});

	// start app server
	gulp.start('server');
});

/* ************************************************************************** */

/* SERVER */

gulp.task('server', ['kill-server'], function() {
	node = spawn('node', [filePaths.serverConfig], {stdio: 'inherit'});
	console.log('Starting app server...')
	node.on('close', function(code) {
		if (code === 8) {
			console.log('Error detected, waiting for changes...');
		}
	});
});

gulp.task('kill-server', function() {
	if (node) {
		node.kill();
		console.log('Shutting down app server...');
	}
});