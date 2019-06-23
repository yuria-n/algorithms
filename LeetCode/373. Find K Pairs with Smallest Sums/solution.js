/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = function(nums1, nums2, k) {
  const sums = [];
  const pairMap = {};
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      const n = n1 + n2;
      if (!pairMap[n]) {
        sums.push(n);
        pairMap[n] = [];
      }
      pairMap[String(n)].push([n1, n2]);
    }
  }

  let result = [];
  for (const key of sums.sort((n1, n2) => n1 - n2)) {
    const arr = pairMap[key];
    result.push(...arr);
    if (result.length >= k) {
      break;
    }
  }

  return result.splice(0, k);
};
