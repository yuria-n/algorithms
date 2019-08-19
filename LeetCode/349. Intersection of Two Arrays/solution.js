/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const result = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  set1.forEach((n) => {
    if (set2.has(n)) {
      result.push(n);
    }
  });

  return result;
};

const intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  return [...new Set(nums2.filter((n) => set1.has(n)))];
};

const intersection = function(nums1, nums2) {
  return [...new Set(nums1.filter((n) => nums2.includes(n)))];
};
