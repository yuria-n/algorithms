/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function(arr) {
  const map = new Map();
  for (const num of arr) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }
  let result = -1;
  for (const [num, count] of map) {
    if (num === count) {
      result = Math.max(result, num);
    }
  }
  return result;
};

const MAX = 500;
const findLucky = function(arr) {
  const counts = new Array(MAX + 1).fill(0);
  for (const num of arr) {
    counts[num]++;
  }
  for (let i = MAX; i > 0; i--) {
    if (counts[i] === i) {
      return i;
    }
  }
  return -1;
};
