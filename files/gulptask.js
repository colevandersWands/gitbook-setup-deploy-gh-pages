
  (function () {
  var gghPages = require('gulp-gh-pages');
  var ghPages = require('gh-pages');
  var gulp = require('gulp');
  var inquirer = require('inquirer');
  var fs = require('fs-extra');
  var hub = require('hub');
  var exec = require('child_process').exec;
  var bookName = require('./package.json').name;


  gulp.task('deploy-gh-pages', [], function() {
    if (!fs.existsSync('.git')) {
      exec('git init');
    }

    exec ('git remote -v | cut -f1 | grep gh-pages', function (err, out) {
        if (out.length == 0) { // No existe remoto gh-pages
            exec('gitbook-setup set-remote-repo', function (err, out) {
              buildAndPush();
            });
        }else {
          buildAndPush();
        }
    });
  });

  function buildAndPush () {
    if (!fs.existsSync('_book')) {
      exec('gitbook build', function (err, out) {
        if (!err) return gulp.src('./_book/**/*').pipe(gghPages());
      });
    }
    else {
      return gulp.src('./_book/**/*').pipe(gghPages());
    }
  }


})(this);
