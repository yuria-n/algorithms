/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
  const m = Math.floor(n / 5);
  return !n ? 0 : m + trailingZeroes(m);
};
