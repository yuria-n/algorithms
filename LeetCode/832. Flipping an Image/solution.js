/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  for (const row of A) {
    const l = row.length;
    for (let j = 0; j < l / 2; j++) {
      const k = l - j - 1;
      [row[j], row[k]] = [row[k] ^ 1, row[j] ^ 1];
    }
  }
  return A;
};
