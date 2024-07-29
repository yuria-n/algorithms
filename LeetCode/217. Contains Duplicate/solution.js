/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate4(nums) {
  nums.sort((n1, n2) => n1 - n2);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return true;
    }
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
