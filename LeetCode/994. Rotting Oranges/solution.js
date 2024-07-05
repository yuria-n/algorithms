const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
function orangesRotting(grid) {
  const lenY = grid.length;
  const lenX = grid[0].length;

  let time = 0;
  let freshes = 0;
  const queue = [];

  for (let y = 0; y < lenY; y++) {
    for (let x = 0; x < lenX; x++) {
      switch (grid[y][x]) {
        case 1: {
          freshes++;
          break;
        }
        case 2: {
          queue.push([x, y]);
          break;
        }
      }
    }
  }

  while (queue.length > 0 && freshes > 0) {
    let l = queue.length;
    while (l-- > 0) {
      const [x, y] = queue.shift();
      grid[y][x] = 0;
      for (const [dx, dy] of directions) {
        const x1 = x + dx;
        const y1 = y + dy;
        if (
          x1 < 0 ||
          y1 < 0 ||
          x1 >= lenX ||
          y1 >= lenY ||
          grid[y1][x1] !== 1
        ) {
          continue;
        }
        freshes--;
        grid[y1][x1] = 2;
        queue.push([x1, y1]);
      }
    }
    time++;
  }

  return freshes === 0 ? time : -1;
}
