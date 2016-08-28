var gulp                  = require('gulp');

var sass                  = require('gulp-sass');
var cssnano               = require('gulp-cssnano');
var autoprefixer          = require('gulp-autoprefixer');
var sourcemaps            = require('gulp-sourcemaps');

var webpack               = require('webpack-stream');
var webpackSettings       = require('./webpack.config.js');

var imagemin              = require('gulp-imagemin');
var cache                 = require('gulp-cache');

var browserSync           = require('browser-sync').create();
var environments          = require('gulp-environments');
var development           = environments.development;
var production            = environments.production;

var del                   = require('del');


// config
var config = {
  // your vhost domain name
  proxy: 'kirby-ultrakit.dev',
  paths: {
    dist: './public',
    src: './source',
    dest: './public/assets'
  }
};


// clean
gulp.task('clean', function() {
  return del([
    config.paths.dest + '/js',
    config.paths.dest + '/css',
    config.paths.dest + '/images'
    // keep fonts & avatars
  ]);
});

// css
gulp.task('css', function() {
  return gulp.src(config.paths.src + '/scss/main.scss')
    .pipe(development(sourcemaps.init()))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sass())
    .pipe(development(sourcemaps.write()))
    .pipe(production(cssnano()))
    .pipe(gulp.dest(config.paths.dest + '/css'));
});

// js
gulp.task('js', function() {
  return gulp.src(config.paths.src + '/js/main.js')
    .pipe(webpack(webpackSettings))
    .pipe(gulp.dest(config.paths.dest + '/js'));
});

// images
gulp.task('images', function() {
  return gulp.src(config.paths.src + '/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.paths.dest + '/images'));
});

// fonts
gulp.task('fonts', function() {
  return gulp.src(config.paths.src + '/fonts/**/*')
    .pipe(gulp.dest(config.paths.dest + '/fonts'));
});

// browsersync
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: config.proxy,
    notify: false,
    files: [
      config.paths.dest + '/css/**/*.css',
      config.paths.dest + '/js/**/*.js',
      config.paths.dest + '/images/**/*',
      config.paths.dest + '/fonts/**/*'
    ],
  });
});

// watch tasks

gulp.task('watch:css', function() {
  return gulp.watch(config.paths.src + '/scss/**/*.scss', gulp.series('css'));
});

gulp.task('watch:js', function() {
  return gulp.watch(config.paths.src + '/js/**/*.js', gulp.series('js'));
});

gulp.task('watch:images', function() {
  return gulp.watch(config.paths.src + '/images/**/*', gulp.series('images'));
});

gulp.task('watch:fonts', function() {
  return gulp.watch(config.paths.src + '/fonts/**/*', gulp.series('fonts'));
});

gulp.task('watch:build', function() {
  return gulp.watch([
    config.paths.dist + '/site/**/*',
    config.paths.dist + '/content/**/*'
  ]);
});

gulp.task('watch', gulp.parallel('watch:css', 'watch:js', 'watch:images', 'watch:fonts', 'watch:build'));

// main tasks
gulp.task('build',  gulp.series('clean', gulp.parallel('css', 'js', 'images', 'fonts')));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'browser-sync')));
