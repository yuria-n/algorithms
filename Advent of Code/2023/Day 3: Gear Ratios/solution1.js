// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

const directions = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
];

// Read lines from ./input.txt and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("\n");

let sum = 0;

for (let y = 0; y < lines.length; y++) {
  let isValid = false;
  let num = "";
  for (let x = 0; x < lines[y].length; x++) {
    const char = lines[y][x];
    const isNumber = isValidDigit(char);
    if (!isNumber && num.length === 0) {
      continue;
    }
    if (!isNumber) {
      sum += isValid ? Number(num) : 0;
      num = "";
      isValid = false;
      continue;
    }
    num += char;
    if (!isValid) {
      isValid = directions.some(([dx, dy]) =>
        isValidNumber(lines, directions, x + dx, y + dy)
      );
    }
  }
  if (num.length > 0 && isValid) {
    sum += Number(num);
  }
}

console.log(sum);

function isValidDigit(char) {
  return /\d/.test(char);
}

function isValidNumber(lines, directions, x, y) {
  return (
    y >= 0 &&
    y < lines.length &&
    x >= 0 &&
    x < lines[y].length &&
    !isValidDigit(lines[y][x]) &&
    lines[y][x] !== "."
  );
}
