/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const sorted = Array.from(nums).sort((a, b) => a - b);
  const map = new Map();
  for (const [index, num] of sorted.entries()) {
    if (!map.has(num)) {
      map.set(num, index);
    }
  }
  return nums.map(num => map.get(num));
};
