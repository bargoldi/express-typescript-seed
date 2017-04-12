const gulp = require('gulp');
const ts = require('gulp-typescript');
const exec = require('child_process').exec;

gulp.task('build-app', function () {
    return gulp.src(['./app/**/*.ts'])
        .pipe(ts())
        .pipe(gulp.dest('./dist/app'));
});

gulp.task('watch', ['build-app'], function () {
    gulp.watch('./**/*.ts', ['build-app']);
});

gulp.task('build-models', function () {
    return exec('gulp --gulpfile ./models/gulpfile.js build', function (error, stdout, stderr) {
        console.log(stdout);
        if (error) {
            console.log(error, stderr);
        }
    });
});

gulp.task('build-dal', function () {
    return exec('gulp --gulpfile ./dal/gulpfile.js build', function (error, stdout, stderr) {
        console.log(stdout);
        if (error) {
            console.log(error, stderr);
        }
    });
});

gulp.task('build-index', function () {
    return gulp.src(['./index.ts'])
        .pipe(ts())
        .pipe(gulp.dest('./dist'));
});

gulp.task('project', ['build-app', 'build-models', 'build-dal', 'build-index'], function () {
});

gulp.task('default', ['project']);