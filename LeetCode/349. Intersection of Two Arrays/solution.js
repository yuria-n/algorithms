/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const result = new Set();
  for (let i = 0; i < nums1.length; i++) {
    const n1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const n2 = nums2[j];
      if (!result.has(n1) && n1 === n2) {
        result.add(n1);
        break;
      }
    }
  }
  return Array.from(result);
};
