const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("\n");

let sum = 0;

// loop through the array of lines
for (const line of lines) {
  if (line === "") {
    continue;
  }
  const nums = line.split(" ").map(Number);
  const num = findLastNumber(nums);
  sum += num;
}

console.log(sum);

function findLastNumber(nums) {
  const arr = [nums];
  let curArr = nums;

  while (curArr.length > 0) {
    if (curArr.every((num) => num === 0)) {
      break;
    }
    const nextArr = [];
    for (let i = 0; i < curArr.length - 1; i++) {
      nextArr.push(curArr[i + 1] - curArr[i]);
    }
    arr.push(nextArr);
    curArr = nextArr;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      arr[i].push(0);
      continue;
    }
    const lastNum = arr[i + 1][arr[i + 1].length - 1];
    const nextNum = arr[i][arr[i].length - 1];
    const curNum = nextNum + lastNum;
    arr[i].push(curNum);
  }

  return arr[0][arr[0].length - 1];
}
