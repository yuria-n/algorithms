/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function(A, K) {
  A.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < A.length; i++) {
    const n = A[i];
    if (K && n < 0) {
      A[i] = -n;
      K--;
    }
  }
  if (K % 2) {
    const min = Math.min(...A);
    const i = A.findIndex(n => n === min);
    A[i] = -A[i];
  }
  return A.reduce((n, sum) => (n += sum));
};
