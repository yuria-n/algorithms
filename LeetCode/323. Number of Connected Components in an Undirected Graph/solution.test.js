const countComponents = require("./solution");

const output1 = countComponents(5, [
  [0, 1],
  [1, 2],
  [3, 4],
]);
const expected1 = 2;
console.log(output1 === expected1);

const output2 = countComponents(5, [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]);
const expected2 = 1;
console.log(output2 === expected2);
