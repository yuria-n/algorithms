/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  return Math.max(
    ...Array.from(new Set(s.split(""))).map((c) => calcMax(s, k, c))
  );
}

function calcMax(s, k, c) {
  const set = new Set();
  let max = 0;
  let left = 0;
  let right = left;
  while (right < s.length || left < s.length - max) {
    if (set.size > k) {
      set.delete(left);
      left++;
      continue;
    }
    if (s[right] !== c) {
      set.add(right);
    }
    max = Math.max(max, right - left);
    right++;
  }
  return max;
}
