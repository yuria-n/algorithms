/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
  const result = [];
  for (const [i, j] of index.entries()) {
    result.splice(j, 0, nums[i]);
  }
  return result;
};
