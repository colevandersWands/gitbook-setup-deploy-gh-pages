
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
    exec ('git remote -v | cut -f1 | grep origin', function (err, out) {
        if (out.length == 0) { // No existe remoto origin
          set_remote = false;
	  console.log("You don't have remote repo. Please execute","\x1b[33m"," $gitbook-setup set-remote-repo","\x1b[0m");        
	}
    });
    if (set_remote) {
      if (!fs.existsSync('_book')) {
        console.log("You don't have your book built. Please execute","\x1b[33m"," $gitbook build","\x1b[0m");
      }
      else {
        console.log("Lets push to gh-pages");
        return gulp.src('./_book/**/*').pipe(gghPages());
      }
    }
  });
})(this);
