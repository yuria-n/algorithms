/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n]) {
      return true;
    }
    map[n] = true;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate2 = function(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      return true;
    }
    set.add(n);
  }

  return false;
};
