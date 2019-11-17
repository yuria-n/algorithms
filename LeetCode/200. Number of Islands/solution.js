/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '0') {
        continue;
      }
      helper(i, j);
      result++;
    }
  }
  return result;

  function helper(r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === '0') {
      return;
    }
    grid[r][c] = '0';
    helper(r - 1, c);
    helper(r + 1, c);
    helper(r, c - 1);
    helper(r, c + 1);
  }
};
