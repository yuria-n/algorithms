// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

// Constants
const cubeMap = new Map([
  ['red', 12],
  ['green', 13],
  ['blue', 14],
]);

// Read lines from ./input.text and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.text"), "utf8").split("\n");

// Count the rounds of game which was possible to play
let count = 0;

for (let i = 0; i < lines.length; i++) {
  const [, record] = lines[i].split(': ');
  const rounds = record.split('; ');
  if (rounds.every(round => canPlay(round, cubeMap))) {
    count= count + i + 1;
  }
}

console.log(count);


/**
 * Check if the line can be played
 * @param {string} line
 * @param {Map<string, number>} map
 * @return {boolean}
 */
function canPlay(line, map) {
  const cubes = line.split(', ');
  for (const cube of cubes) {
    const [num, color] = cube.split(' ');
    if (Number(num) > map.get(color)) {
      return false;
    }
  }
  return true;
}
