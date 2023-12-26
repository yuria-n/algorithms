const fs = require("node:fs");
const path = require("node:path");

function validReflection(lines, left, right) {
  while (left >= 0 && right < lines.length && lines[left] === lines[right]) {
    left--;
    right++;
  }
  return left === -1 || right === lines.length;
}

function findAxis(lines) {
  for (let i = 0; i < lines.length - 1; i++) {
    let left = i;
    let right = i + 1;
    if (validReflection(lines, left, right)) {
      return i + 1;
    }
  }
  return 0;
}

function findPerfectReflection(lines) {
  const rowAxis = findAxis(lines);
  if (rowAxis > 0) {
    return rowAxis * 100;
  }

  const colLines = [];
  for (let i = 0; i < lines[0].length; i++) {
    colLines.push(lines.map((line) => line[i]).join(""));
  }
  return findAxis(colLines);
}

const pazzles = fs
  .readFileSync(path.resolve("./input.txt"), "utf8")
  .split("\n\n")
  .map((line) => line.split("\n").filter((line) => line.length > 0));

let result = 0;

for (const pazzle of pazzles) {
  result += findPerfectReflection(pazzle);
}

console.log(result);
