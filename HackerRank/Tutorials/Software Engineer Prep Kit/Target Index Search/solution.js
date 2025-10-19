/*
 * Complete the 'binarySearch' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY nums
 *  2. INTEGER target
 */

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    }

    if (num < target) {
      left = mid + 1;
      continue;
    }
    right = mid - 1;
  }

  return -1;
}
