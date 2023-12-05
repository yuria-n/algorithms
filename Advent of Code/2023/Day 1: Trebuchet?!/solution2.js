// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

const digitMap = new Map([
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
  ["eno", 1],
  ["owt", 2],
  ["eerht", 3],
  ["ruof", 4],
  ["evif", 5],
  ["xis", 6],
  ["neves", 7],
  ["thgie", 8],
  ["enin", 9],
]);

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
  sum += findNumbers(line, digitMap);
}

console.log(sum);

/**
 * @param {string} line
 * @param {Map<string, number>} map
 * @return {number}
 */
function findNumbers(line, map) {
  const [digitF] = line.match(
    /([1-9]|one|two|three|four|five|six|seven|eight|nine)/
  );
  const [digitL] =
    line.length <= 1
      ? line
      : line
          .split("")
          .reverse()
          .join("")
          .match(/([1-9]|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/);
  return map.get(digitF) * 10 + map.get(digitL);
}
