/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
  const matrix = Array.from(new Array(3), () => new Array(3).fill(-1));
  let turn = 0;
  for (const [i, j] of moves) {
    matrix[i][j] = turn;
    if (
      helper(i, j - 1, 0, -1) + helper(i, j + 1, 0, 1) === 2 ||
      helper(i - 1, j, -1, 0) + helper(i + 1, j, 1, 0) === 2 ||
      helper(i - 1, j - 1, -1, -1) + helper(i + 1, j + 1, 1, 1) === 2 ||
      helper(i + 1, j - 1, 1, -1) + helper(i - 1, j + 1, -1, 1) === 2
    ) {
      return turn ? 'B' : 'A';
    }
    turn = turn ? 0 : 1;
  }
  return moves.length === 9 ? 'Draw' : 'Pending';

  function helper(x, y, dx, dy, count = 0) {
    if (x < 0 || x >= 3 || y < 0 || y >= 3) {
      return count;
    }
    if (matrix[x][y] === -1 || matrix[x][y] !== turn) {
      return count;
    }
    return helper(x + dx, y + dy, dx, dy, count + 1);
  }
};
