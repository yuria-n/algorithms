/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const res = [];
  const sorted = Array.from(map.entries()).sort(
    ([, count1], [, count2]) => count2 - count1
  );
  for (let i = 0; i < k; i++) {
    const [num] = sorted[i];
    res.push(num);
  }
  return res;
}
