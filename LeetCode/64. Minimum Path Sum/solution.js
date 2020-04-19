/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const dp = Array.from({ length: row }, () => new Array(col).fill(0));
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      if (!y && !x) {
        dp[y][x] = grid[y][x];
        continue;
      }
      const left = !x ? Infinity : dp[y][x - 1];
      const top = !y ? Infinity : dp[y - 1][x];
      dp[y][x] = grid[y][x] + Math.min(left, top);
    }
  }
  return dp[row - 1][col - 1];
};
