const SIZE = 8;
const DIRECTIONS = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function(board) {
  const rook = findRook();
  let count = 0;
  for (const [y, x] of DIRECTIONS) {
    count += findPawn(...rook, y, x);
  }
  return count;

  function findRook() {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (board[i][j] === 'R') {
          return [i, j];
        }
      }
    }
  }

  function findPawn(y, x, dy, dx) {
    if (y < 0 || x < 0 || y >= SIZE || x >= SIZE || board[y][x] === 'B') {
      return 0;
    }
    if (board[y][x] === 'p') {
      return 1;
    }
    return findPawn(y + dy, x + dx, dy, dx);
  }
};
