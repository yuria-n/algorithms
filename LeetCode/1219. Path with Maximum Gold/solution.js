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
      max = Math.max(max, helper(i, j));
    }
  }
  return max;

  function helper(i, j) {
    if (!grid[i] || !grid[i][j]) {
      return 0;
    }
    const current = grid[i][j];
    grid[i][j] = 0;
    const max = Math.max(
      helper(i - 1, j),
      helper(i, j - 1),
      helper(i, j + 1),
      helper(i + 1, j),
    );
    grid[i][j] = current;
    return current + max;
  }
};
