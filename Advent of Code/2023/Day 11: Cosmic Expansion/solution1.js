const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const lines = fs
  .readFileSync(path.resolve("./input.txt"), "utf8")
  .split("\n")
  .filter((line) => line.length > 0);

// Add all axis of # to an array
const galaxies = [];

for (let y = 0; y < lines.length; y++) {
  for (let x = 0; x < lines[y].length; x++) {
    if (lines[y][x] === ".") {
      continue;
    }
    galaxies.push([x, y]);
  }
}

console.log({ galaxies });

let sum = 0;
const spaceMap = new Map();

// Calculate the shortest paths between every path of #
// Only horizontal or vertical moves are allowed
for (let i = 0; i < galaxies.length; i++) {
  for (let j = i + 1; j < galaxies.length; j++) {
    sum += getShortestPath(lines, spaceMap, galaxies[i], galaxies[j]);
  }
}

// Console.log the sum of the length of the paths
console.log(sum);

/**
 * Calculate shortest path
 * @param {string[]} lines
 * @param {Map<string, number>} map
 * @param {number[]} axis1 - [x1, y1]
 * @param {number[]} axis2 - [x2, y2]
 */
function getShortestPath(lines, map, [x1, y1], [x2, y2]) {
  let curSum = 0;

  for (let i = y1; i < y2; i++) {
    const key = `y${i}`;
    if (map.has(key)) {
      curSum += map.get(key);
      continue;
    }
    const val = !lines[i].includes("#") ? 2 : 1;
    map.set(key, val);
    curSum += val;
  }

  for (let i = Math.min(x1, x2); i < Math.max(x1, x2); i++) {
    const key = `x${i}`;
    if (map.has(key)) {
      curSum += map.get(key);
      continue;
    }
    const val = lines.every((line) => line[i] === ".") ? 2 : 1;
    map.set(key, val);
    curSum += val;
  }

  return curSum;
}
