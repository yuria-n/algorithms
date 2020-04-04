/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let i = 0;
  for (const n of nums) {
    if (n) {
      nums[i++] = n;
    }
  }
  while (i < nums.length) {
    nums[i++] = 0;
  }
};

const moveZeroes = function (nums) {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n) {
      [nums[p], nums[i]] = [n, nums[p]];
      p++;
    }
  }
};
