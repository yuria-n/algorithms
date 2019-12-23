/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  let result = 0;
  for (const num of nums) {
    if (Math.floor(Math.log10(num) + 1) % 2 === 0) {
      result++;
    }
  }
  return result;
};
