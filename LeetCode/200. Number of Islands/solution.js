/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== "1") {
        continue;
      }
      markIsland(x, y);
      count++;
    }
  }
  return count;

  function markIsland(x, y) {
    if (grid[y]?.[x] !== "1") {
      return;
    }
    grid[y][x] = "0";
    markIsland(x - 1, y);
    markIsland(x, y + 1);
    markIsland(x + 1, y);
    markIsland(x, y - 1);
  }
}

// DFS (stack) - LILO
function numIslands2(grid) {
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== "1") {
        continue;
      }
      markIsland(x, y);
      count++;
    }
  }
  return count;

  function markIsland(x, y) {
    const stack = [];
    stack.push([x, y]);
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      if (grid[y]?.[x] !== "1") {
        continue;
      }
      grid[y][x] = "0";
      stack.push([x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]);
    }
  }
}

// BFS (queue) - FIFO
function numIslands3(grid) {
  let count = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] !== "1") {
        continue;
      }
      markIsland(x, y);
      count++;
    }
  }
  return count;

  function markIsland(x, y) {
    const queue = [];
    queue.push([y, x]);
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      if (grid[y]?.[x] !== "1") {
        continue;
      }
      grid[y][x] = "0";
      queue.push([x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]);
    }
  }
}
