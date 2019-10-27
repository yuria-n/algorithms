/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
  let i = 0;
  for (const char of t) {
    if (i >= s.length) {
      return true;
    }
    if (s[i] === char) {
      i++;
    }
  }
  return i >= s.length;
};
