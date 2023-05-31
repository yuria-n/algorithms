const cellMap = {
  stable: "X",
  fluid: "O",
  pending: " ",
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solve(board) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (board[y][x] === cellMap.stable) {
        continue;
      }
      update(x, y, isValid(x, y) ? cellMap.stable : cellMap.fluid);
    }
  }

  function isValid(x, y) {
    if (y < 0 || y >= board.length || x < 0 || x >= board[y].length) {
      return false;
    }
    if (board[y][x] !== cellMap.fluid) {
      return true;
    }
    board[y][x] = cellMap.pending;
    return (
      isValid(x - 1, y) &&
      isValid(x + 1, y) &&
      isValid(x, y - 1) &&
      isValid(x, y + 1)
    );
  }

  function update(x, y, b) {
    if (
      y < 0 ||
      y >= board.length ||
      x < 0 ||
      x >= board[y].length ||
      board[y][x] !== cellMap.pending
    ) {
      return;
    }
    board[y][x] = b;
    update(x - 1, y, b);
    update(x + 1, y, b);
    update(x, y - 1, b);
    update(x, y + 1, b);
  }
}
