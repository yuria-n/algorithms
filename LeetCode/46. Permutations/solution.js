/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = new Set();
  build([], 0);
  return Array.from(result).map((nums) => nums.split(","));

  function build(subset, index) {
    if (index === nums.length) {
      result.add([...subset].join(","));
      return;
    }

    for (let i = 0; i <= nums.length; i++) {
      build(
        [...subset.slice(0, i), nums[index], ...subset.slice(i)],
        index + 1,
      );
    }
  }
}
