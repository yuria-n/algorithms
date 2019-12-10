/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let count = 0;
  const set = new Set();
  for (const c of s) {
    if (!set.has(c)) {
      set.add(c);
      continue;
    }
    count += 2;
    set.delete(c);
  }
  return count + (!set.size ? 0 : 1);
};
