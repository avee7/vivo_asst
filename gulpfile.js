var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

var scripts = require('./scripts');
var styles = require('./styles');

gulp.task('css', function() {
    gulp.src(styles.vendor)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));

    gulp.src(styles.app)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('js', function() {
    gulp.src(scripts.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));

    gulp.src(scripts.app)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('html', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('clean',function() {
   del('dist');
});

gulp.task('build', ['css', 'js', 'html'], function() {
});

gulp.task('watch', function() {
    gulp.watch(styles.app, ['css']);
    gulp.watch(scripts.app, ['js']);
    gulp.watch('src/**/*.html', ['html']);
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        }
    })
});

gulp.task('start', function() {
    runSequence('clean', 'build', 'browser-sync');
    gulp.start('watch');
});

