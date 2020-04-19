/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
const minNumberOfFrogs = function (croakOfFrogs) {
  const counts = [0, 0, 0, 0, 0];
  const l = counts.length - 1;
  const indexMap = { c: l, r: 0, o: 1, a: 2, k: 3 };
  let result = 0;
  for (const char of croakOfFrogs) {
    const i = indexMap[char];
    const c = counts[i];
    if (i < l && !c) {
      return -1;
    }
    if (i === l && !c) {
      result++;
    }
    counts[i] = Math.max(0, c - 1);
    counts[i === l ? 0 : i + 1]++;
  }
  counts[l] = 0;
  return counts.reduce((sum, c) => sum + c, 0) ? -1 : result;
};
