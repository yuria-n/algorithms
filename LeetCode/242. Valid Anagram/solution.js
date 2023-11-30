const numOfLetters = 26;
const offset = 97;

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const arrS = new Array(numOfLetters).fill(0);
  const arrT = new Array(numOfLetters).fill(0);
  for (let i = 0; i < s.length; i++) {
    arrS[s[i].charCodeAt() - offset]++;
    arrT[t[i].charCodeAt() - offset]++;
  }
  return arrS.every((n, i) => n === arrT[i]);
}
