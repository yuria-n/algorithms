/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function (m, n) {
  let digits = ~~Math.log2(n);
  let result = 0;
  while (digits >= 0) {
    const b = 1 << digits;
    const bm = m & b;
    const bn = n & b;
    if (bm ^ bn) {
      break;
    }
    result |= bm;
    digits--;
  }
  return result;
};

const rangeBitwiseAnd = function (m, n) {
  let result = n;
  for (let i = m; i < n; i++) {
    result &= i;
  }
  return result;
};
