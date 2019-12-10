/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let count = 0;
  const map = new Map();
  for (const char of s) {
    const cur = map.get(char);
    if (!cur) {
      map.set(char, 1);
      continue;
    }
    count += 2;
    map.delete(char);
  }
  return count + (!map.size ? 0 : 1);
};
