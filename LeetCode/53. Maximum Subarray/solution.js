/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let max = -Infinity;
  let cur = 0;
  for (const n of nums) {
    cur += n;
    max = Math.max(cur, max);
    cur = Math.max(0, cur);
  }
  return max;
};

const maxSubArray = function(nums) {
  let max = -Infinity;
  let cur = 0;
  for (const n of nums) {
    cur = Math.max(n, n + cur);
    max = Math.max(max, cur);
  }
  return max;
};
