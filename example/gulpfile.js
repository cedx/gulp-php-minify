const {phpMinify, TransformMode} = require('@cedx/gulp-php-minify');
const gulp = require('gulp');

/**
 * Compresses a given set of PHP scripts.
 */
gulp.task('compress:php', () => gulp.src('path/to/lib/**/*.php', {read: false})
  .pipe(phpMinify({
    binary: process.platform == 'win32' ? 'C:\\Program Files\\PHP\\php.exe' : '/usr/bin/php',
    mode: process.platform == 'win32' ? TransformMode.safe : TransformMode.fast,
    silent: process.stdout.isTTY
  }))
  .pipe(gulp.dest('path/to/out'))
);
