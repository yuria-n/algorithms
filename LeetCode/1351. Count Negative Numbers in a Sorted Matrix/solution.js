/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  let count = 0;
  for (const row of grid) {
    const { length } = row;
    for (let i = 0; i < length; i++) {
      if (row[i] < 0) {
        count += length - i;
      }
    }
  }
  return count;
};
