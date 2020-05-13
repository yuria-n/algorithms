/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + (((right - left) / 2) | 0);
    const odd = mid % 2;
    const n1 = nums[mid];
    const n2 = nums[mid + 1];
    if ((odd && n1 === n2) || (!odd && n1 !== n2)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
