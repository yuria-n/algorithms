/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const result = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  for (const n of set1) {
    if (set2.has(n)) {
      result.push(n);
    }
  }
  return result;
}

function intersection2(nums1, nums2) {
  return [...new Set(nums1.filter((n) => nums2.includes(n)))];
}

function intersection3(nums1, nums2) {
  const set1 = new Set(nums1);
  return Array.from(new Set(nums2)).filter((n) => set1.has(n));
}
