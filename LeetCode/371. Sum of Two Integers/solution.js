/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
  while (b !== 0) {
    const c = a & b;
    a ^= b;
    b = c << 1;
  }
  return a;
}
