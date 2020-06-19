/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  citations.sort((n1, n2) => n1 - n2);
  const l = citations.length;
  let left = 0;
  let right = l - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (citations[mid] < l - mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return Math.min(citations[left] || 0, l - left);
};
