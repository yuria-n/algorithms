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

function solve(...nums) {
  const result = [0, 0];
  for (let i = 0; i < nums.length / 2; i++) {
    if (nums[i] > nums[i + 3]) {
      result[0]++;
    } else if (nums[i] < nums[i + 3]) {
      result[1]++;
    }
  }
  return result;
}

// function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const a0A1A2 = readLine().split(' ');

//   const a0 = parseInt(a0A1A2[0], 10);

//   const a1 = parseInt(a0A1A2[1], 10);

//   const a2 = parseInt(a0A1A2[2], 10);

//   const b0B1B2 = readLine().split(' ');

//   const b0 = parseInt(b0B1B2[0], 10);

//   const b1 = parseInt(b0B1B2[1], 10);

//   const b2 = parseInt(b0B1B2[2], 10);

//   let result = solve(a0, a1, a2, b0, b1, b2);

//   ws.write(result.join(' ') + '\n');

//   ws.end();
// }
