/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
  const l = A.length;
  const ca = A[0];
  for (let i = 0; i < l; i++) {
    if (B[i] !== ca) {
      continue;
    }
    if (A.slice(0, l - i) !== B.slice(i)) {
      continue;
    }
    return A.slice(l - i) === B.slice(0, i);
  }
  return false;
};
