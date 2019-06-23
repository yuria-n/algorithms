/**
 * @param {number} c
 * @return {boolean}
 */

// set
judgeSquareSum = function(c) {
  const set = new Set();
  for (let i = 0; i <= Math.sqrt(c); i++) {
    const s = i * i;
    set.add(s);
    if (set.has(c - s)) {
      return true;
    }
  }
  return false;
};
