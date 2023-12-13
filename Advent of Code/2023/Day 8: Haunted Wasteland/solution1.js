const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const [instructions, network] = fs
  .readFileSync(path.resolve("./input.txt"), "utf8")
  .split("\n\n");
const nodeMap = new Map(
  network
    .split("\n")
    .filter((node) => node)
    .map((node) => {
      const [key, values] = node.split(" = ");
      const [L, R] = values.match(/[A-Z]+/g);
      return [key, { L, R }];
    })
);

let curNode = "AAA";
let step = 0;

while (curNode !== "ZZZ") {
  curNode = nodeMap.get(curNode)[instructions[step % instructions.length]];
  step++;
}

console.log(step);
