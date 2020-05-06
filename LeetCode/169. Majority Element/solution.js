/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let count = 0;
  let result;
  for (const n of nums) {
    if (!count) {
      result = n;
    }
    count += result === n ? 1 : -1;
  }
  return result;
};

const majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};

const majorityElement = function (nums) {
  const half = nums.length / 2;
  const map = new Map();
  for (const n of nums) {
    const count = (map.get(n) || 0) + 1;
    if (count > half) {
      return n;
    }
    map.set(n, count);
  }
};
