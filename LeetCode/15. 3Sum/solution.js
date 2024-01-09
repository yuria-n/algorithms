/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const map = new Map();
  const sortedNums = nums.sort((num1, num2) => num1 - num2);

  for (let i = 0; i < sortedNums.length; i++) {
    let num = sortedNums[i];
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const numL = sortedNums[left];
      const numR = sortedNums[right];
      const sum = num + numL + numR;
      if (sum === 0) {
        const values = [num, numL, numR];
        map.set(`${values}`, values);
      }
      if (sum < 0) {
        left++;
        continue;
      }
      right--;
    }
  }

  return Array.from(map.values());
}
