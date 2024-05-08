/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = [];
  backtrack(0);
  return result;

  function backtrack(index) {
    if (index === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      backtrack(index + 1);
      [nums[index], nums[i]] = [nums[i], nums[index]];
    }
  }
}
