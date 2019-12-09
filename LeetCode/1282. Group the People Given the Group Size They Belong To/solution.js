/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
  const result = [];
  const map = new Map();
  for (const [i, size] of groupSizes.entries()) {
    const arr = map.get(size) || [];
    if (arr.push(i) === size) {
      result.push(arr);
      map.delete(size);
      continue;
    }
    map.set(size, arr);
  }
  return result;
};
