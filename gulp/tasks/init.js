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

const BASE_URL = 'https://leetcode.com/problems/';

async function init() {
  // create a new directory
  prompt.start();
  console.log('0: Leetcode\n1: Hacker Rank\n2: Others\n');
  const { mode, name } = await prompt.getAsync(['mode', 'name']);
  const directory = (() => {
    switch (+mode) {
      case 1:
        return '../../HackerRank';
      case 2:
        return '../../Others';
      default:
        return '../../LeetCode';
    }
  })();

  const dirname = path.resolve(__dirname, directory, name);
  fs.mkdirSync(dirname);

  // create files in the directory
  const readmepath = path.resolve(dirname, 'README.md');
  const slug = name
    .split(/^[0-9]*\.\s/)[1]
    .replace(/\s/g, '-')
    .toLowerCase();
  const url = `${BASE_URL}${slug}/`;
  const content = `# ${name}\n\n${url}\n\n`;
  fs.writeFileSync(readmepath, content, 'utf8');

  const jspath = path.resolve(dirname, 'solution.js');
  fs.writeFileSync(jspath, '', 'utf8');
}
