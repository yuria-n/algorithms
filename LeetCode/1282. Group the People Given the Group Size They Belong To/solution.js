/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
  const map = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    const arr = map.get(size) || [];
    map.set(size, [...arr, i]);
  }
  const result = [];
  for (const [key, arr] of map.entries()) {
    const l = arr.length;
    if (key === l) {
      result.push(arr);
      continue;
    }
    for (let i = 0; i < arr.length; i += key) {
      result.push(arr.slice(i, i + key));
    }
  }
  return result;
};
