/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  nums.sort((n1, n2) => n1 - n2);
  const result = new Set();
  backtrack([], 0);
  return Array.from(result).map((subset) =>
    subset.length > 0 ? subset.split(",") : [],
  );

  function backtrack(subset, index) {
    result.add(subset.join(","));
    if (index === nums.length) {
      return;
    }
    subset.push(nums[index]);
    backtrack(subset, index + 1);
    subset.pop();
    backtrack(subset, index + 1);
  }
}
