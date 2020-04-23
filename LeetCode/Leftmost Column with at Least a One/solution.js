/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         return this.grid[x][y];
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         return [this.grid.length, this.grid[0].length];
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function (binaryMatrix) {
  const [col, row] = binaryMatrix.dimensions();
  let min = row;
  for (let y = 0; y < col; y++) {
    min = findIndex(y);
  }
  return min === row ? -1 : min;

  function findIndex(y) {
    let left = 0;
    let right = min;
    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (binaryMatrix.get(y, mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};

function BinaryMatrix(grid) {
  this.grid = grid;
  this.get = function (x, y) {
    return this.grid[x][y];
  };
  this.dimensions = function () {
    return [this.grid.length, this.grid[0].length];
  };
}

const g1 = [
  [0, 0],
  [1, 1],
];
console.log(leftMostColumnWithOne(new BinaryMatrix(g1)));

const g2 = [
  [0, 0, 0, 1],
  [0, 0, 1, 1],
  [0, 1, 1, 1],
];
console.log(leftMostColumnWithOne(new BinaryMatrix(g2)));
