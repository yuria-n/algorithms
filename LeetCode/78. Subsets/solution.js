/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [];
  backtracking([], 0);
  return result;

  function backtracking(subset, index) {
    if (index === nums.length) {
      result.push([...subset]);
      return;
    }
    subset.push(nums[index]);
    backtracking(subset, index + 1);
    subset.pop();
    backtracking(subset, index + 1);
  }
}

function subsets2(nums) {
  const result = [];
  backtracking([], 0);
  return result;

  function backtracking(subset, index) {
    result.push(subset);
    for (let i = index; i < nums.length; i++) {
      backtracking([...subset, nums[i]], i + 1);
    }
  }
}
