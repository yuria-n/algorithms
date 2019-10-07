/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = function(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (!row[j]) {
        continue;
      }
      max = Math.max(max, helper([i, j], 0));
    }
  }
  return max;

  function helper([i, j], sum) {
    if (!grid[i] || !grid[i][j]) {
      return sum;
    }
    const num = grid[i][j];
    sum += num;
    grid[i][j] = 0;
    const max = Math.max(
      helper([i - 1, j], sum),
      helper([i, j - 1], sum),
      helper([i, j + 1], sum),
      helper([i + 1, j], sum),
    );
    grid[i][j] = num;
    return max;
  }
};
