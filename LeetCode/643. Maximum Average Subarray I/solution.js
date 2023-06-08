/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let left = 0;
  let right = k;
  let curSum = nums.slice(left, right).reduce((n, acc) => acc + n, 0);
  let result = curSum;
  while (right < nums.length) {
    curSum = curSum - nums[left] + nums[right];
    result = Math.max(result, curSum);
    left++;
    right++;
  }
  return result / k;
}
