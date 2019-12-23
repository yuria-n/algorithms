/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const isPossibleDivide = function(nums, k) {
  nums.sort((n1, n2) => n1 - n2);

  const map = new Map();
  for (const n of nums) {
    const count = map.get(n) + 1 || 1;
    map.set(n, count);
  }

  for (const [n, numOfSets] of map) {
    for (let m = n + 1; m < n + k; m++) {
      const count = !map.has(m) ? -1 : map.get(m) - numOfSets;
      if (count < 0) {
        return false;
      }
      if (!count) {
        map.delete(m);
      } else {
        map.set(m, count);
      }
    }
    map.delete(n);
  }

  for (const [_, numOfSets] of map) {
    if (numOfSets > 0) {
      return false;
    }
  }

  return true;
};
