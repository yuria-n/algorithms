/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const l = nums.length;
  const copy = [...nums];
  for (let i = 0; i < l; i++) {
    nums[(i + k) % l] = copy[i];
  }
};
