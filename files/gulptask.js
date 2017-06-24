
  (function () {
  var gghPages = require('gulp-gh-pages');
  var ghPages = require('gh-pages');
  var gulp = require('gulp');
  var inquirer = require('inquirer');
  var fs = require('fs-extra');
  var hub = require('hub');

  var bookName = require('./package.json').name;

  gulp.task('deploy-gh-pages', [], function() {
    if (fs.existsSync('.git')) {
      exec()
    }
    if (!fs.existsSync('_book')) {
        exec('gitbook build', function (err, out) {
          if (!err) return gulp.src('./_book/**/*').pipe(gghPages());
        });

      })
    }
    else {
      return gulp.src('./_book/**/*').pipe(gghPages());
    }
  });
})(this);
