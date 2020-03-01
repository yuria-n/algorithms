/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const sorted = Array.from(nums).sort((n1, n2) => n2 - n1);
  const map = new Map(sorted.map((num, index) => [num, nums.length - index - 1]));
  return nums.map(num => map.get(num));
}
