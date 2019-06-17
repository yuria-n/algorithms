/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let i = 0;
  while (nums[i] < target) {
    i++;
  }
  return i;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert2 = function(nums, target) {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return l;
};
