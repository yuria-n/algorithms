/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
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

  function helper([i, j], area) {
    if (!grid[i] || !grid[i][j]) {
      return area;
    }
    area++;
    grid[i][j] = 0;
    area = helper([i - 1, j], area);
    area = helper([i, j - 1], area);
    area = helper([i, j + 1], area);
    area = helper([i + 1, j], area);
    return area;
  }
};
