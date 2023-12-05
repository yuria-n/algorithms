// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.text and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.text"), "utf8").split("\n");

// Loop through lines
// Pick the first number and the last number in each line to make 2-digit numbers
// Add the 2-digit numbers together and console.log it
let sum = 0;

for (const line of lines) {
  if (line.length === 0) {
    continue;
  }
  sum += findNumbers(line);
}

console.log(sum);

/**
 * @param {string} line
 * @return {number}
 */
function findNumbers(line) {
  let first = -1;
  let last = -1;
  for (let i = 0; i < line.length; i++) {
    if (first >= 0 && last >= 0) {
      break;
    }
    const digitF = Number(line[i]);
    const digitL = Number(line[line.length - i - 1]);
    if (first < 0 && !Number.isNaN(digitF)) {
      first = digitF;
    }
    if (last < 0 && !Number.isNaN(digitL)) {
      last = digitL;
    }
  }
  return first * 10 + last;
}
