
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

    var set_remote = true;

    exec ('git remote -v | cut -f1 | grep gh-pages', function (err, out) {
        console.log(out.length);
        if (out.length == 0) { // No existe remoto gh-pages
          set_remote = false;
          console.log("You don't have remote repo. Please execute $gitbook-setup set-remote-repo");
        }
    });

    if (set_remote) {
      if (!fs.existsSync('_book')) {
        console.log("You don't have your book built. Please execute $gitbook-setup build")
      }
      else {
        console.log("Lets push to gh-pages");
        return gulp.src('./_book/**/*').pipe(gghPages({
          origin: 'gh-pages'
        }));
      }
    }
  });
})(this);
