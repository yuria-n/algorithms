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

function plusMinus(arr) {
  const l = arr.length;

  const sums = [0, 0, 0];
  for (let i = 0; i < l; i++) {
    const a = arr[i];
    if (a > 0) {
      sums[0]++;
    } else if (a < 0) {
      sums[1]++;
    } else {
      sums[2]++;
    }
  }

  const p = Math.pow(10, 6);
  for (let i = 0; i < sums.length; i++) {
    sums[i] = Math.round(sums[i] / l * p) / p;
  }
  return sums;
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));

  console.log(plusMinus(arr).join('\n'));
}
