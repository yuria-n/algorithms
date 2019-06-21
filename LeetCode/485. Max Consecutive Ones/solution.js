/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;
  for (const n of nums) {
    max = Math.max(max, n ? ++current : current);
    if (!n) {
      current = 0;
    }
  }
  return max;
};
