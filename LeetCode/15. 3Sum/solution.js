/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((num1, num2) => num1 - num2);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && num === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      const numL = nums[left];
      const numR = nums[right];
      const sum = num + numL + numR;
      if (sum === 0) {
        result.push([num, numL, numR]);
        while (numL === nums[left + 1]) {
          left++;
        }
        while (numR === nums[right - 1]) {
          right--;
        }
      }
      if (sum < 0) {
        left++;
        continue;
      }
      right--;
    }
  }

  return result;
}
