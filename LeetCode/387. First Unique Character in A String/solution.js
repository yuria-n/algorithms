/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].charCodeAt() - 97] === 1) {
      return i;
    }
  }
  return -1;
};

const firstUniqChar = function (s) {
  const l = s.length;
  const map = {};
  for (let i = 0; i < l; i++) {
    const c = s[i];
    map[c] = ++map[c] || 1;
  }
  for (let i = 0; i < l; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
