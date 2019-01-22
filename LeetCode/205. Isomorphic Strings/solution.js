/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];
    if (mapS[a] !== mapT[b]) {
      return false;
    }
    mapS[a] = i;
    mapT[b] = i;
  }

  return true;
};
