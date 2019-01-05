/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  return nums.reduce((num, result) => num ^ result);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber2 = function(nums) {
  const map = {};

  nums.forEach((num) => {
    let val = map[num];
    map[num] = (val && ++val) || 1;
  });

  const keys = Object.keys(map);

  for (const key of keys) {
    if (map[key] === 1) {
      return key;
    }
  }

  return 0;
};
