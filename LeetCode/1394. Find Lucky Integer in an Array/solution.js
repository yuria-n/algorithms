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
