/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
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
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const l = nums.length;

  const prods1 = new Array(l).fill(1);
  for (let i = 1; i < nums.length; i++) {
    prods1[i] = prods1[i - 1] * nums[i - 1];
  }

  const prods2 = new Array(l).fill(1);
  for (let i = nums.length - 2; i >= 0; i--) {
    prods2[i] = prods2[i + 1] * nums[i + 1];
  }

  return prods1.map((num, i) => num * prods2[i]);
}
