/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  let max = 0;
  const lenY = grid.length;
  const lenX = grid[0].length;
  for (let y = 0; y < lenY; y++) {
    for (let x = 0; x < lenX; x++) {
      max = Math.max(max, dfs(x, y));
    }
  }
  return max;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= lenX || y >= lenY || grid[y][x] === 0) {
      return 0;
    }
    grid[y][x] = 0;
    return 1 + dfs(x, y + 1) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x - 1, y);
  }
}
