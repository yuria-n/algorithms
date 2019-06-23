/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {
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

const judgeSquareSum2 = function(c) {
  for (let i = 0; i <= Math.floor(Math.sqrt(c)); i++) {
    let a = Math.sqrt(c - i * i);
    if (a === Math.floor(a)) {
      return true;
    }
  }
  return false;
};
