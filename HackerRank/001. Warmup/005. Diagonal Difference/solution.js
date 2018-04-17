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

function diagonalDifference(a) {
  let sum1 = 0;
  let sum2 = 0;
  const l = a.length;
  for (let i = 0; i < l; i++) {
    const row = a[i];
    sum1 += row[i];
    sum2 += row[l - i - 1];
  }
  return Math.abs(sum1 - sum2);
}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const n = parseInt(readLine(), 10);

//   let a = Array(n);

//   for (let aRowItr = 0; aRowItr < n; aRowItr++) {
//     a[aRowItr] = readLine()
//       .split(' ')
//       .map(aTemp => parseInt(aTemp, 10));
//   }

//   let result = diagonalDifference(a);

//   ws.write(result + '\n');

//   ws.end();
// }
