var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function()  {
  gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshintreporter('default'));
});
gulp.task('default', function(){

});
