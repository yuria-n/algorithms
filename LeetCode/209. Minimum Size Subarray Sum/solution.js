/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(target, nums) {
  let left = 0;
  let right = 0;
  let curSum = 0;
  let result = Infinity;
  while (left <= right && right <= nums.length) {
    if (curSum >= target) {
      result = Math.min(result, right - left);
      curSum -= nums[left++];
    }
    if (curSum < target) {
      curSum += nums[right++];
    }
  }
  return result === Infinity ? 0 : result;
}
