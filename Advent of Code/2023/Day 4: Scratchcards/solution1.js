// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("\n");

let total = 0;

for (const line of lines) {
  if (line === "") {
    continue;
  }

  // Split line into an array of winning numbers and owning numbers
  const [, numbers] = line.split(": ");
  const [winningNumbers, owningNumbers] = numbers.split(" | ");

  // Create a set of winning numbers
  const set = new Set(winningNumbers.match(/\d+/g));

  let curTotal = 0;

  // Loop through each owning number and check if it's in the set of winning numbers
  for (const num of owningNumbers.split(" ")) {
    if (!set.has(num)) {
      continue;
    }
    // If it is, add 1 to the curTotal
    // If curTotal is 1 or more, double it
    curTotal = curTotal === 0 ? 1 : curTotal * 2;
  }
  // Add the curTotal to the total
  total += curTotal;
}

console.log(total);
