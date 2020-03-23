const LENGTH = 8;
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
  for (const [i, j] of DIRECTIONS) {
    count += findPawn(...rook, i, j);
  }
  return count;

  function findRook() {
    for (let i = 0; i < LENGTH; i++) {
      for (let j = 0; j < LENGTH; j++) {
        if (board[i][j] === 'R') {
          return [i, j];
        }
      }
    }
  }

  function findPawn(i, j, x, y) {
    if (i < 0 || j < 0 || i >= LENGTH || j >= LENGTH || board[i][j] === 'B') {
      return 0;
    }
    if (board[i][j] === 'p') {
      return 1;
    }
    return findPawn(i + x, j + y, x, y);
  }
};
