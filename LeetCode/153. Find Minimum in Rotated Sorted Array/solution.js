/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  return Math.min(...nums);
};

// O(n + 1)
const findMin = function(nums) {
  return nums.sort((a, b) => b - a)[0];
};

const findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
