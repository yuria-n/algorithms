/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  let previous = 0;
  let current = 0;
  nums.forEach(n => {
    const tmp = current;
    current = Math.max(previous + n, current);
    previous = tmp;
  });
  return current;
};
