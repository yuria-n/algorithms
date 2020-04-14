/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  const map = new Map([[0, -1]]);
  let max = 0;
  let cur = 0;
  for (const [i, n] of nums.entries()) {
    cur += n ? 1 : -1;
    if (!map.has(cur)) {
      map.set(cur, i);
      continue;
    }
    max = Math.max(max, i - map.get(cur));
  }
  return max;
};
