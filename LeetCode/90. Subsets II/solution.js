/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  nums.sort((n1, n2) => n1 - n2);
  const result = [];
  backtrack([], 0);
  return result;

  function backtrack(subset, index) {
    result.push([...subset]);

    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) {
        continue;
      }
      subset.push(nums[i]);
      backtrack(subset, i + 1);
      subset.pop();
    }
  }
}
