/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const nthUglyNumber = function(n, a, b, c) {
  // FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
  const set = new Set();
  helper(a);
  helper(b);
  helper(c);
  return [...set].sort((a, b) => a - b)[n - 1];

  function helper(m) {
    for (let i = 1; i <= n * Math.min(a, b, c); i++) {
      set.add(i * m);
    }
  }
};
