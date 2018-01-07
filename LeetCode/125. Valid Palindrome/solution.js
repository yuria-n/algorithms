/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  s = s.toLowerCase().replace(/\W/g, "");
  const l = s.length;
  for (let i = 0; i < parseInt(l / 2); i++) {
    if (s[i] !== s[l - i - 1]) {
      return false;
    }
  }
  return true;
};
