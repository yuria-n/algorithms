/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const result = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    let j = i;
    while (j > 0) {
      result[i] += j & 1;
      j >>>= 1;
    }
  }
  return result;
}
