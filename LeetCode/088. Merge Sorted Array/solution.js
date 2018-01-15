/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  while (m && n) {
    const num1 = nums1[m - 1];
    const num2 = nums2[n - 1];
    const i = m + n - 1;

    if (num1 > num2) {
      nums1[i] = num1;
      m--;
    } else {
      nums1[i] = num2;
      n--;
    }
  }
  for (let i = 0; i < n; i++) {
    nums1[i] = nums2[i];
  }
};
