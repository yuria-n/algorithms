/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
  const l = s.length;
  let left = 0;
  let right = 0;
  for (let i = 0; i < l; i++) {
    const c1 = s[i];
    const c2 = s[l - i - 1];
    left += c1 === '*' || c1 === '(' ? 1 : -1;
    right += c2 === '*' || c2 === ')' ? 1 : -1;
    if (left < 0 || right < 0) {
      return false;
    }
  }
  return true;
};
