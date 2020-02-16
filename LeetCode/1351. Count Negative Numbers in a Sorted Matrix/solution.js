/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  let count = 0;
  for (const row of grid) {
    for (const col of row) {
      if (col < 0) {
        count++;
      }
    }
  }
  return count;
};
