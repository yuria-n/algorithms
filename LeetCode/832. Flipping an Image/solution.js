/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    const row = A[i];
    const l = row.length;
    for (let j = 0; j < Math.ceil(l / 2); j++) {
      const k = l - j - 1;
      [A[i][j], A[i][k]] = [invert(row[k]), invert(row[j])];
    }
  }
  return A;

  function invert(n) {
    return n === 1 ? 0 : 1;
  }
};
