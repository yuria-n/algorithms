'use strict';

// node modules (built-in)
const fs = require('fs');
const path = require('path');

// libraries
const gulp = require('gulp');
const Aigle = require('aigle');

gulp.task('rename', rename);

function rename() {
  // read all directory names
  const dirname = path.resolve(__dirname, '../../LeetCode');
  const files = fs.readdirSync(dirname, 'utf8');
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    const oldname = files[i];
    // make a new name
    let newname = oldname
      .replace(/\_/, '.')
      .replace(/([A-Z])/g, ' $1')
      .replace(/(I I)/, 'II');
    console.log(newname);
    // replace a old name with a new name
    const oldpath = path.resolve(dirname, oldname);
    const newpath = path.resolve(dirname, newname);
    fs.renameSync(oldpath, newpath);
  }
}
