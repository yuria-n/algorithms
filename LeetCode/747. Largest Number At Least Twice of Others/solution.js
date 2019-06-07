/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
  let maxIndex = -1;
  let max1 = -1;
  let max2 = -1;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n > max1) {
      [max1, max2] = [n, max1];
      maxIndex = i;
    } else if (n > max2) {
      max2 = n;
    }
  }

  return max1 >= max2 * 2 ? maxIndex : -1;
};
