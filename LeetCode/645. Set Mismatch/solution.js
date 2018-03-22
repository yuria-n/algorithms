/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function(nums) {
  const l = nums.length;
  const map = {};
  let err = 0;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    if (map[n]) {
      map[n] = map[n] + 1;
      err = n;
      continue;
    }
    map[n] = 1;
  }

  for (let i = 1; i <= l; i++) {
    if (!map[i]) {
      return [err, i];
    }
  }
};
