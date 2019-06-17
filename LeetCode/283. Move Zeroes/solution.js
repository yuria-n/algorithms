/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let p = 0;
  nums.forEach((n) => {
    if (n) {
      nums[p++] = n;
    }
  });

  while (p < nums.length) {
    nums[p++] = 0;
  }
};

const moveZeroes2 = function(nums) {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (!n) {
      continue;
    }
    [nums[p], nums[i]] = [n, nums[p]];
    p++;
  }
};
