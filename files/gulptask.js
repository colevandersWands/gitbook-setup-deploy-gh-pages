
  (function () {
  var gghPages = require('gulp-gh-pages');
  var ghPages = require('gh-pages');
  var gulp = require('gulp');
  var fs = require('fs-extra');

  gulp.task('deploy-gh-pages', [], function() {

    if (!fs.existsSync('_book')) {
      exec('gitbook build', function (err, out) {
        if (!err) return gulp.src('./_book/**/*').pipe(gghPages());
      });
    }
    return gulp.src('./_book/**/*').pipe(gghPages());
  });
})
