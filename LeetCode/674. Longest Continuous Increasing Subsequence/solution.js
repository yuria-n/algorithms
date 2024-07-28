/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
  let max = 1;
  let left = 0;
  let right = left;
  while (++right < nums.length) {
    if (nums[right - 1] >= nums[right]) {
      left = right;
      continue;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
