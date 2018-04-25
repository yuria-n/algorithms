/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n !== val) {
      nums[length++] = n;
    }
  }
  return length;
};
