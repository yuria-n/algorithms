/**
 * @param {number[][]} grid
 * @return {number}
 */
const countServers = function(grid) {
  let result = 0;

  // Count all computers
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        result++;
      }
    }
  }

  // Subtract isolated computers
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!grid[i][j]) {
        continue;
      }
      if (
        helper(i - 1, j, -1, 0) &&
        helper(i + 1, j, 1, 0) &&
        helper(i, j - 1, 0, -1) &&
        helper(i, j + 1, 0, 1)
      ) {
        result--;
      }
    }
  }

  return result;

  function helper(x, y, dx, dy) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return true;
    }
    if (grid[x][y]) {
      return false;
    }
    return helper(x + dx, y + dy, dx, dy);
  }
};
