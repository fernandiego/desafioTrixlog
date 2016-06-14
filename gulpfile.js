var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('jshint', function()  {
  return gulp.src('script.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
gulp.task('uglify', function() {
  return gulp.src('script.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
gulp.task('default', ['jshint', 'uglify']);
