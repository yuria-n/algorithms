/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map.has(n)) {
      return [map.get(n), i];
    }
    map.set(target - n, i);
  }
};
