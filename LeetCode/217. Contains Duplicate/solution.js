/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n]) {
      return true;
    }
    map[n] = true;
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate2(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      return true;
    }
    set.add(n);
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate3(nums) {
  return new Set(nums).size !== nums.length;
}
