const fs = require("node:fs");
const path = require("node:path");

// Read input file
const lines = fs
  .readFileSync(path.resolve("./input.txt"), "utf8")
  .split("\n")
  .filter((line) => line.length > 0);

// Move rocks
// Calculate load
function calculateColumnLoad(line) {
  // Define a curSum variable
  let curSum = 0;
  // Save the first index
  let left = -1;
  let right = -1;
  // If it's a movable rock (O), consider it to move to the left
  // If # is found, update the first index to the right of the #
  // Add the current movable rock's load to the curSum
  while (++right < line.length) {
    const cell = line[right];
    if (cell === ".") {
      continue;
    }
    if (cell === "#") {
      left = right;
      continue;
    }
    left++;
    curSum += line.length - left;
  }
  return curSum;
}

// Sum the load per column
let sum = 0;
for (let i = 0; i < lines[0].length; i++) {
  const column = lines.map((line) => line[i]);
  const curSum = calculateColumnLoad(column);
  sum += curSum;
}

console.log(sum);
