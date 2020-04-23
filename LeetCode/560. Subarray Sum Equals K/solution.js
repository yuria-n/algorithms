/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  const map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map[sum - k]) {
      result += map[sum - k];
    }
    map[sum] = ++map[sum] || 1;
  }
  return result;
};

const subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  const map = new Map([[0, 1]]);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const diff = map.get(sum - k);
    result += !diff ? 0 : diff;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return result;
};
