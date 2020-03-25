/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function(nums) {
  const sorted = [...nums].sort((n1, n2) => n1 - n2);
  let start = 0;
  let end = nums.length;
  while (start < end) {
    const sSame = nums[start] === sorted[start];
    const eSame = nums[end - 1] === sorted[end - 1];
    if (!sSame && !eSame) {
      return end - start;
    }
    if (sSame) {
      start++;
    }
    if (eSame) {
      end--;
    }
  }
  return 0;
};
