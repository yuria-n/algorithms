/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const hl = height[left];
    const hr = height[right];
    area = Math.max(area, (right - left) * Math.min(hl, hr));
    if (hl > hr) {
      right--;
      continue;
    }
    left++;
  }

  return area;
}
