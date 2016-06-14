var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function()  {
  return gulp.src('*.js')
  .pipe(jshint())
  .pipe(jshintreporter('default'));
});
gulp.task('default', function(){

});
