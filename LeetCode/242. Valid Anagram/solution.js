const numOfLetters = 26;
const offset = "a".charCodeAt(0);

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const counts = new Array(numOfLetters).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - offset]++;
    counts[t.charCodeAt(i) - offset]--;
  }
  return counts.every((count) => count === 0);
}
