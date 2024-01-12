/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    set.add(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      const c = s[j];
      if (set.has(c)) {
        break;
      }
      set.add(c);
    }
    result = Math.max(result, set.size);
  }
  return result;
}

function lengthOfLongestSubstring2(s) {
  const map = new Map();
  let left = 0;
  let right = 0;
  let result = 0;
  while (left < s.length && right < s.length) {
    const c = s[right];
    if (map.has(c)) {
      left = Math.max(left, map.get(c) + 1);
      map.delete(c);
      continue;
    }
    map.set(c, right);
    right++;
    result = Math.max(result, right - left);
  }
  return result;
}

// Two pointers
function lengthOfLongestSubstring3(s) {
  const set = new Set();
  let max = 0;
  let left = 0;
  let right = left;
  while (right < s.length) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
      continue;
    }
    set.add(s[right]);
    right++;
    max = Math.max(max, right - left);
  }
  return max;
}
