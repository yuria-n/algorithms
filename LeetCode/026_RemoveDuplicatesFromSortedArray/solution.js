/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const l = nums.length;
  if (l < 2) return l;

  let arr = nums.concat();
  for (let i = l - 1; i >= -1; i--) {
    const n = arr[i];
    if (n !== arr[i - 1]) nums.unshift(n);
  }

  return nums.length - l;
};
