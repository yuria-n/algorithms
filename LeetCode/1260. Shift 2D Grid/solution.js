/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
  const rowL = grid.length;
  const colL = grid[0].length;
  const result = Array.from(new Array(rowL), () => new Array(colL).fill(0));

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      const p = i * colL + j;
      const n = (p + k) % (rowL * colL);
      const r = Math.floor(n / colL);
      const c = n % colL;
      result[r][c] = grid[i][j];
    }
  }

  return result;
};
