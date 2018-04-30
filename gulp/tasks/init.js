'use strict';

// node modules (built-in)
const fs = require('fs');
const path = require('path');

// libraries
const gulp = require('gulp');
const Aigle = require('aigle');
const prompt = require('prompt');

Aigle.promisifyAll(prompt);

gulp.task('init', init);

async function init() {
  // create a new directory
  prompt.start();
  console.log('0: Leetcode\n1: Hacker Rank\n2: Others\n');
  const { mode, name } = await prompt.getAsync(['mode', 'name']);
  const directory = (() => {
    switch (+mode) {
      case 0:
        return '../../LeetCode';
      case 1:
        return '../../HackerRank';
      default:
        return '../../Others';
    }
  })();
  const dirname = path.resolve(__dirname, directory, name);
  fs.mkdirSync(dirname);
  // create files in the directory
  const readmepath = path.resolve(dirname, 'README.md');
  const readme = `# ${name}`;
  fs.writeFileSync(readmepath, readme, 'utf8');
  const jspath = path.resolve(dirname, 'solution.js');
  fs.writeFileSync(jspath, '', 'utf8');
}
