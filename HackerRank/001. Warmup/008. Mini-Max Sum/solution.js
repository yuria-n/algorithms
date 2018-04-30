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

function miniMaxSum(arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  arr.forEach(n => {
    sum += n;
    max = Math.max(n, max);
    min = Math.min(n, min);
  });

  return `${sum - max} ${sum - min}`;
}

function main() {
  const arr = readLine()
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));

  console.log(miniMaxSum(arr));
}
