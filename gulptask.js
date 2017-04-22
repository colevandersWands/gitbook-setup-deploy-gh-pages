var gghPages = require('gulp-gh-pages');
var ghPages = require('gh-pages')\n

gulp.task('deploy-gh-pages', [], function() {
  return gulp.src('./_book/**/*').pipe(gghPages());
});
