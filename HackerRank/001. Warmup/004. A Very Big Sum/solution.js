'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//   inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//   inputString = inputString
//     .trim()
//     .split('\n')
//     .map(str => str.trim());

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

function aVeryBigSum(n, arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
}

function aVeryBigSum2(n, arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const n = parseInt(readLine(), 10);

//   const arr = readLine()
//     .split(' ')
//     .map(arrTemp => parseInt(arrTemp, 10));

//   let result = aVeryBigSum(n, arr);

//   ws.write(result + '\n');

//   ws.end();
// }
