/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const l = nums.length;
  const result = new Array(l).fill(1);
  let p1 = 1;
  let p2 = 1;
  for (let i = 0; i < l; i++) {
    const j = l - i - 1;
    result[i] *= p1;
    result[j] *= p2;
    p1 = p1 * nums[i];
    p2 = p2 * nums[j];
  }
  return result;
};
