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
    .map(string => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let max1 = -Infinity;
  let max2 = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (max1 < n) {
      max2 = max1;
      max1 = n;
    } else if (max1 > n && max2 < n) {
      max2 = n;
    }
  }
  return max2;
}

function main() {
  const n = +readLine();
  const nums = readLine()
    .split(' ')
    .map(Number);

  console.log(getSecondLargest(nums));
}
