/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  let max = 1;
  let start = 0;
  let end = start;
  while (++end <= nums.length) {
    if (nums[end - 1] >= (nums[end] ?? -Infinity)) {
      max = Math.max(max, end - start);
      start = end;
    }
  }
  return max;
}
