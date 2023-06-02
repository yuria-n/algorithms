/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let i = 0;
  while (nums[i] < target) {
    i++;
  }
  return i;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert2 = function (nums, target) {
  const l = nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return l;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert3(nums, target) {
  return findIndex(0, nums.length);

  function findIndex(left, right) {
    if (left === right) {
      return left;
    }
    const mid = Math.floor((left + right) / 2);
    const n = nums[mid];
    if (n === target) {
      return mid;
    }
    return n > target ? findIndex(left, mid) : findIndex(mid + 1, right);
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert4(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const n = nums[mid];
    if (n === target) {
      return mid;
    }
    left = n > target ? left : mid + 1;
    right = n > target ? mid : right;
  }
  return left;
}
