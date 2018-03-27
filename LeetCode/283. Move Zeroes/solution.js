/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  const l = nums.length;
  let p = 0;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    if (n) {
      nums[p++] = n;
    }
  }
  while (p < l) {
    nums[p++] = 0;
  }
};
