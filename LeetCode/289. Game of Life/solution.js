/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
  const row = board.length;
  const col = board[0].length;
  const prevBoard = board.map(r => r.map(c => c));

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      const cell = prevBoard[r][c];
      const count = countLivingNeighbors(r, c);
      if ((cell && (count < 2 || count > 3)) || (!cell && count === 3)) {
        board[r][c] = cell ? 0 : 1;
        continue;
      }
      board[r][c] = cell;
    }
  }

  const directions = [-1, 0, 1];
  function countLivingNeighbors(r, c) {
    let count = 0;
    for (const i of directions) {
      for (const j of directions) {
        if (!i && !j) {
          continue;
        }
        count += isAlive(r + i, c + j) ? 1 : 0;
      }
    }
    return count;
  }

  function isAlive(r, c) {
    if (r < 0 || r >= row || c < 0 || c >= col) {
      return false;
    }
    return !!prevBoard[r][c];
  }
};
