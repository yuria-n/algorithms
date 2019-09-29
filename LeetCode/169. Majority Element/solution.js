/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const map = new Map();
  const half = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const count = ++map[val] || 1;
    if (count > half) {
      return val;
    }
    map[val] = count;
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};
