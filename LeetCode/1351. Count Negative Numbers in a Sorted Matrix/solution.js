/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  let count = 0;
  let row = grid.length - 1;
  let col = grid[0].length;
  let cell = 0;
  while (row >= 0 && cell < col) {
    if (grid[row][cell] >= 0) {
      cell++;
      continue;
    }
    count += col - cell;
    row--;
  }
  return count;
};
