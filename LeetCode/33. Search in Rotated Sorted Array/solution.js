// Hint:
// [ 4, 5, 6, 7, 0, 1, 2] target = 0
// [-∞,-∞,-∞,-∞, 0, 1, 2]
// [ 4, 5, 6, 7, 0, 1, 2] target = 5
// [ 4, 5, 6, 7, ∞, ∞, ∞]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const first = nums[0];
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    const current = nums[mid];
    const n =
      current < first === target < first
        ? current
        : target < first
        ? -Infinity
        : Infinity;
    if (n === target) {
      return mid;
    }
    if (n < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = helper(nums[mid], nums[0]);
    if (num === target) {
      return mid;
    }
    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;

  function helper(cur, first) {
    if (cur < first === target < first) {
      return cur;
    }
    return target < first ? -Infinity : Infinity;
  }
};
