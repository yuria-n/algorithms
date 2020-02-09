/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
  const map = new Map();
  for (const num of arr) {
    if (map.has(num)) {
      return true;
    }
    map.set(num / 2, true);
    map.set(num * 2, true);
  }
  return false;
};
