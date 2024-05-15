/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const lr = board.length;
  const lc = board[0].length;

  for (let y = 0; y < lr; y++) {
    for (let x = 0; x < lc; x++) {
      if (backtrack(x, y, 0)) {
        return true;
      }
    }
  }
  return false;

  function backtrack(x, y, index) {
    if (index === word.length) {
      return true;
    }

    if (y < 0 || y >= lr || x < 0 || x >= lc || board[y][x] !== word[index]) {
      return false;
    }

    const char = board[y][x];
    board[y][x] = "";

    for (const [m, n] of directions) {
      if (backtrack(x + m, y + n, index + 1)) {
        return true;
      }
    }

    board[y][x] = char;
    return false;
  }
}
