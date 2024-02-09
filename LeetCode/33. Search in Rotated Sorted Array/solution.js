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
function search(nums, target) {
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
}

// Binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.ceil((l + r) / 2);
    const num = nums[mid];
    const numL = nums[l];
    const numR = nums[r];

    if (num === target) {
      return mid;
    }

    if (numL <= num && (num < target || numL > target)) {
      l = mid + 1;
      continue;
    }

    if (numL <= num || num > target || numR < target) {
      r = mid - 1;
      continue;
    }

    l = mid + 1;
  }
  return -1;
}
