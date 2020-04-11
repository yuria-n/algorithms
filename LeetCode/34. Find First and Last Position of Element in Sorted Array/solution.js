// TODO: use binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  const result = [-1, -1];
  for (const [i, n] of nums.entries()) {
    if (n < target) {
      continue;
    }
    if (n > target) {
      break;
    }
    if (result[0] === -1) {
      result[0] = i;
    }
    result[1] = i;
  }
  return result;
};
