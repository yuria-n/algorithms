/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const map = new Map();
  for (const num of arr) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }
  return map.size === new Set(map.values()).size;
};
