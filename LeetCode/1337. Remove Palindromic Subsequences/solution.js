/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function(s) {
  if (!s.length) {
    return 0;
  }
  reutrn isPalindrome(s) ? 1 : 2;

  function isPalindrome(str) {
    const { length } = str;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (str[i] !== str[length - i - 1]) {
       return false;
      }
    }
    return true;
  }
};
