// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("\n");
const [[, ...times], [, ...distances]] = lines.map((line) => line.split(/\s+/));
const races = times.map((time, i) => [Number(time), Number(distances[i])]);

let product = 1;

// Calculate the number of ways to win each race
for (const [time, distance] of races) {
  product *= sumWaysToWin(time, distance);
}

// Multiply the results and console.log the answer
console.log(product);

/**
 * @param {number} time
 * @param {number} distance
 * @return {number}
 */
function sumWaysToWin(time, distance) {
  let sum = 0;
  for (let i = 0; i <= time; i++) {
    if (i * (time - i) <= distance) {
      continue;
    }
    sum++;
  }
  return sum;
}
