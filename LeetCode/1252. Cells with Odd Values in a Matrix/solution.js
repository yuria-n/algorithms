/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function(n, m, indices) {
  const matrix = Array.from(new Array(n), () => new Array(m).fill(0));
  for (const [ri, ci] of indices) {
    helper(ri, ci, -1, 0);
    helper(ri, ci, 0, -1);
    helper(ri, ci, 1, 0);
    helper(ri, ci, 0, 1);
  }
  let sum = 0;
  matrix.forEach(row => {
    row.forEach(col => {
      sum += col % 2;
    });
  });
  return sum;

  function helper(r, c, dr, dc) {
    if (r < 0 || r > n - 1 || c < 0 || c > m - 1) {
      return;
    }
    matrix[r][c]++;
    helper(r + dr, c + dc, dr, dc);
  }
};
