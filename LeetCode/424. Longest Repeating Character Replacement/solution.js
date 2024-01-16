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

function characterReplacement2(s, k) {
  const offset = "A".charCodeAt(0);
  const counts = new Array(26).fill(0);
  let maxCount = 0;
  let maxRange = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    maxCount = Math.max(maxCount, ++counts[s.charCodeAt(right) - offset]);
    while (right - left + 1 - maxCount > k) {
      counts[s.charCodeAt(left) - offset]--;
      left++;
    }
    maxRange = Math.max(maxRange, right - left + 1);
  }
  return maxRange;
}
