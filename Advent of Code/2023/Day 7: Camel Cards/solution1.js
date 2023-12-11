// Node.js v20
// This script will be run by "node solution1.js"

const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const lines = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("\n");

const cardStrengthMap = new Map([
  ["A", 13],
  ["K", 12],
  ["Q", 11],
  ["J", 10],
  ["T", 9],
  ["9", 8],
  ["8", 7],
  ["7", 6],
  ["6", 5],
  ["5", 4],
  ["4", 3],
  ["3", 2],
  ["2", 1],
]);

const handTypeMap = new Map([
  ["HighCard", 1],
  ["OnePair", 2],
  ["TwoPair", 3],
  ["ThreeOfAKind", 4],
  ["FullHouse", 5],
  ["fourOfAKind", 6],
  ["fiveOfAKind", 7],
]);
const handStrengthMap = new Map(
  Array.from(handTypeMap.values()).map((strength) => [strength, []])
);

// 1. Format input
// 2. Determine the strength of each hand
// 3. Set the hand to handStrengthMap and sort the array of the hands by strength
for (const line of lines) {
  if (line === "") {
    continue;
  }
  const [hand, bid] = line.split(" ");
  const map = new Map();
  for (let i = 0; i < hand.length; i++) {
    map.set(hand[i], (map.get(hand[i]) ?? 0) + 1);
  }
  const handType = findHandType(handTypeMap, map);
  handStrengthMap.get(handType).push([hand, Number(bid)]);
}

// Sort hands by strength
for (const [, hands] of handStrengthMap) {
  hands.sort(([handA], [handB]) => {
    for (let i = 0; i < handA.length; i++) {
      const a = cardStrengthMap.get(handA[i]);
      const b = cardStrengthMap.get(handB[i]);
      if (a === b) {
        continue;
      }
      return a - b;
    }
  });
}

let result = 0;
let rank = 1;
for (const [, hands] of handStrengthMap) {
  for (const [hand, bid] of hands) {
    result += rank * bid;
    rank++;
  }
}

console.log(result);

/**
 * @param {Map<string, number>} handTypeMap
 * @param {Map<string, number>} map
 * @return {number}
 */
function findHandType(handTypeMap, map) {
  if (map.size === 1) {
    return handTypeMap.get("fiveOfAKind");
  }
  if (map.size === 2) {
    if (Array.from(map.values()).includes(4)) {
      return handTypeMap.get("fourOfAKind");
    }
    return handTypeMap.get("FullHouse");
  }
  if (map.size === 3) {
    if (Array.from(map.values()).includes(3)) {
      return handTypeMap.get("ThreeOfAKind");
    }
    return handTypeMap.get("TwoPair");
  }
  if (map.size === 4) {
    return handTypeMap.get("OnePair");
  }
  if (map.size === 5) {
    return handTypeMap.get("HighCard");
  }
}
