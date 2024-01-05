/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const l = 9;
  const s = 3;

  for (const row of board) {
    if (!validate(row)) {
      return false;
    }
  }
  for (let i = 0; i < l; i++) {
    if (!validate(board.map((row) => row[i]))) {
      return false;
    }
  }
  for (let i = 0; i < s; i++) {
    for (let j = 0; j < s; j++) {
      const y = i * s;
      const x = j * s;
      const cells = [
        ...board[y].slice(x, x + s),
        ...board[y + 1].slice(x, x + s),
        ...board[y + 2].slice(x, x + s),
      ];
      if (!validate(cells)) {
        return false;
      }
    }
  }
  return true;
}

function validate(cells) {
  const set = new Set();
  for (const cell of cells) {
    if (cell === ".") {
      continue;
    }
    if (set.has(cell)) {
      return false;
    }
    set.add(cell);
  }
  return true;
}
