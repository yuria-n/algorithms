/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const map = {};
  nums.forEach(n => {
    map[n] = true;
  });

  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) {
      return i;
    }
  }
};
