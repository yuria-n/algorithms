/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  let threshold = Math.min(height[left], height[right]);

  while (left < right) {
    if (height[left] <= height[right]) {
      left++;
      threshold = Math.min(height[right], Math.max(height[left], threshold));
      res += Math.max(threshold - height[left], 0);
      continue;
    }
    right--;
    threshold = Math.min(height[left], Math.max(height[right], threshold));
    res += Math.max(threshold - height[right], 0);
  }
  return res;
}
