/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const directions = [-1, 0, 1];
const queensAttacktheKing = function(queens, king) {
  const queenMap = {};
  queens.forEach(([qx, qy]) => {
    const set = queenMap[qx] || new Set();
    queenMap[qx] = set.add(qy);
  });

  const result = [];
  const [kx, ky] = king;
  for (const i of directions) {
    for (const j of directions) {
      if (!i && !j) {
        continue;
      }
      findQueen(kx, ky, i, j);
    }
  }
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
