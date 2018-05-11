'use strict';

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

function staircase(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result += j < n - i - 1 ? ' ' : '#';
    }
    result += '\n';
  }
  return result;
}

function main() {
  const n = parseInt(readLine(), 10);

  console.log(staircase(n));
}
