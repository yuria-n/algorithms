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
  const sorted = Array.from(map.keys()).sort(
    (key1, key2) => map.get(key1) - map.get(key2)
  );
  for (let i = 0; i < k; i++) {
    const [num] = sorted[i];
    res.push(num);
  }
  return res;
}

function topKFrequent2(nums, k) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) ?? 0) + 1);
  }
  const frequencies = Array.from({ length: nums.length + 1 }, () => []);
  for (const [key, count] of countMap) {
    frequencies[count].push(key);
  }
  const res = [];
  for (let i = frequencies.length - 1; i >= 0; i--) {
    if (res.length === k) {
      break;
    }
    const keys = frequencies[i];
    if (keys.length === 0) {
      continue;
    }
    res.push(...keys);
  }
  return res;
}
