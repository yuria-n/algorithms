/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
  const quarter = arr.length * 0.25;
  const map = new Map();
  for (const num of arr) {
    const val = map.get(num) + 1 || 1;
    if (val > quarter) {
      return num;
    }
    map.set(num, val);
  }
};
