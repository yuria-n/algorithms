/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const n = nums[mid];

    if (n === target) {
      return mid;
    }

    if (n < target) {
      left = mid + 1;
      continue;
    }
    right = mid - 1;
  }

  return -1;
};
