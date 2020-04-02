/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  return nums.reduce((num, result) => num ^ result);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const map = new Map();
  for (const num of nums) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }
  for (const [num, count] of map.entries()) {
    if (count === 1) {
      return num;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  nums.sort((n1, n2) => n1 - n2);
  const l = nums.length;
  for (let i = 0; i < l - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[l - 1];
};
