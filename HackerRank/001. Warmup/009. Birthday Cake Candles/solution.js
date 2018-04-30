'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString
    .trim()
    .split('\n')
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function timeConversion(s) {
  const key = s.substr(8, 2);
  let hh = s.substr(0, 2);
  const mmss = s.substr(2, 6);

  if (hh === '12') {
    hh = '00';
  }

  if (key === 'PM') {
    hh = Number(hh) + 12;
  }

  return hh + mmss;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + '\n');

  ws.end();
}
