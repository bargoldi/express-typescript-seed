const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('build', function () {
    return gulp.src(['./**/*.ts', './*.ts', '!node_modules/'])
        .pipe(ts({
            declaration: true,
            module: 'umd',
            target: 'es5',
            sourceMap: true
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./**/*.ts', ['build']);
});

gulp.task('default', ['watch']);