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
  word = word.split("").reverse().join("");

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] !== word[0]) {
        continue;
      }
      if (backtrack(new Set(), "", x, y)) {
        return true;
      }
    }
  }
  return false;

  function backtrack(visited, subset, x, y) {
    if (subset === word) {
      return true;
    }

    if (
      x < 0 ||
      x >= board[0].length ||
      y < 0 ||
      y >= board.length ||
      visited.has(`${x}-${y}`) ||
      subset.length === word.length ||
      subset !== word.substring(0, subset.length)
    ) {
      return false;
    }

    subset += board[y][x];
    visited.add(`${x}-${y}`);

    for (const [m, n] of directions) {
      if (backtrack(visited, subset, x + m, y + n)) {
        return true;
      }
    }
    visited.delete(`${x}-${y}`);
    return false;
  }
}
