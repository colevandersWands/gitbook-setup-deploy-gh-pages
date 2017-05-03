var gghPages = require('gulp-gh-pages');
var ghPages = require('gh-pages');
var fs = require('fs-extra');

gulp.task('deploy-gh-pages', [], function() {

  
 
  return gulp.src('./_book/**/*').pipe(gghPages());
});
