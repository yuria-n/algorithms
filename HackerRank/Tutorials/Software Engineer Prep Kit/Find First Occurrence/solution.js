/*
 * Complete the 'findFirstOccurrence' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function findFirstOccurrence(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = nums[mid];
    if (num >= target) {
      right = mid;
      continue;
    }
    left = mid + 1;
  }

  return nums[left] === target ? left : -1;
}
