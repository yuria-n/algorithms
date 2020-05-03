/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (const c of magazine) {
    const count = map.get(c) || 0;
    map.set(c, count + 1);
  }
  for (const c of ransomNote) {
    const count = map.get(c) || 0;
    if (!count) {
      return false;
    }
    map.set(c, count - 1);
  }
  return true;
};
