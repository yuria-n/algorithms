/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const s = 3;

  for (let i = 0; i < s; i++) {
    for (let j = 0; j < s; j++) {
      const index = i * s + j;
      const row = board[index];
      const column = board.map((row) => row[index]);
      const y = i * s;
      const x = j * s;
      const box = [
        ...board[y].slice(x, x + s),
        ...board[y + 1].slice(x, x + s),
        ...board[y + 2].slice(x, x + s),
      ];
      if (validate(row) && validate(column) && validate(box)) {
        continue;
      }
      return false;
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
