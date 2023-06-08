/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let curSum = nums.slice(0, k).reduce((acc, num) => num + acc);
  let result = curSum;
  for (let i = k; i < nums.length; i++) {
    curSum += nums[i] - nums[i - k];
    result = Math.max(result, curSum);
  }
  return result / k;
}
