/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      if (!y && !x) {
        continue;
      }
      const left = !x ? Infinity : grid[y][x - 1];
      const top = !y ? Infinity : grid[y - 1][x];
      grid[y][x] += Math.min(left, top);
    }
  }
  return grid[row - 1][col - 1];
};
