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

const rotateString = function(A, B) {
  const l = B.length;
  for (let i = 0; i < l; i++) {
    const rotated = B.substring(i, l) + B.substring(0, i);
    if (A === rotated) {
      return true;
    }
  }
  return A === B;
};

const rotateString = function(A, B) {
  return A.length === B.length && (A + A).indexOf(B) !== -1;
};
