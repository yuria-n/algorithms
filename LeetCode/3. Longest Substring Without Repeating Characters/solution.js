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
