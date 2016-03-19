var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', ['copyHtml'], function(){
  return gutil.log('Gulp is running!');
});

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('build'));
});