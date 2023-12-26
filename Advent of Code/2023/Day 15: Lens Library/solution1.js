const fs = require("node:fs");
const path = require("node:path");

// Read input file
const [codeString] = fs
  .readFileSync(path.resolve("./input.txt"), "utf8")
  .split("\n");
const codes = codeString.split(",").filter((line) => line.length > 0);

// Hash string to number
function hashCode(code) {
  let value = 0;
  for (let i = 0; i < code.length; i++) {
    value += code.charCodeAt(i);
    value *= 17;
    value %= 256;
  }
  return value;
}

// Sum of all hash values
let sum = 0;
for (const code of codes) {
  sum += hashCode(code);
}

console.log(sum);
