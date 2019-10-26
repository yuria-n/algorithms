/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = function(queens, king) {
  // create a map
  const queenMap = {};
  queens.forEach(([qx, qy]) => {
    const set = queenMap[qx] || new Set();
    queenMap[qx] = set.add(qy);
  });

  const result = [];
  const [kx, ky] = king;
  findQueen(kx, ky, -1, 0);
  findQueen(kx, ky, 1, 0);
  findQueen(kx, ky, 0, -1);
  findQueen(kx, ky, 0, 1);
  findQueen(kx, ky, -1, -1);
  findQueen(kx, ky, 1, 1);
  findQueen(kx, ky, 1, -1);
  findQueen(kx, ky, -1, 1);
  return result;

  function findQueen(x, y, dx, dy) {
    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      return;
    }

    if (queenMap[x] && queenMap[x].has(y)) {
      result.push([x, y]);
      return;
    }

    findQueen(x + dx, y + dy, dx, dy);
  }
};
