const fs = require("node:fs");
const path = require("node:path");

// Read lines from ./input.txt and convert to array of strings
const lines = fs
  .readFileSync(path.resolve("./input.txt"), "utf8")
  .split("\n")
  .filter((line) => line.length > 0);

// Find axis of 'S' character
const sy = lines.findIndex((line) => line.includes("S"));
const sx = lines[sy].indexOf("S");
console.log(`Start: ${sx},${sy}`);

// Convert lines to 2D array of characters
const maze = lines
  .filter((line) => line.length > 0)
  .map((line) => line.split(""));

// Start from sy,sx and find the furthest point
// If there are multiple numbers, set the smallest one
const queue = [];
queue.push(
  [sx, sy - 1, 0, -1, 1],
  [sx + 1, sy, 1, 0, 1],
  [sx, sy + 1, 0, 1, 1],
  [sx - 1, sy, -1, 0, 1]
);

while (queue.length > 0) {
  const [x, y, dx, dy, distance] = queue.shift();

  if (
    x < 0 ||
    y < 0 ||
    x >= maze[y].length ||
    y >= maze.length ||
    maze[y][x] === "." ||
    maze[y][x] === "S" ||
    Number.isInteger(maze[y][x])
  ) {
    continue;
  }

  // TODO: guard statements, only dx or dy checks are needed
  switch (maze[y][x]) {
    case "|": {
      if ((dx === 0 && dy === 1) || (dx === 0 && dy === -1)) {
        maze[y][x] = distance;
        queue.push([x + dx, y + dy, dx, dy, distance + 1]);
      }
      break;
    }
    case "-": {
      if ((dx === 1 && dy === 0) || (dx === -1 && dy === 0)) {
        maze[y][x] = distance;
        queue.push([x + dx, y + dy, dx, dy, distance + 1]);
      }
      break;
    }
    case "L": {
      if (dx === 0 && dy === 1) {
        maze[y][x] = distance;
        queue.push([x + 1, y, 1, 0, distance + 1]);
      }
      if (dx === -1 && dy === 0) {
        maze[y][x] = distance;
        queue.push([x, y - 1, 0, -1, distance + 1]);
      }
      break;
    }
    case "J": {
      if (dx === 0 && dy === 1) {
        maze[y][x] = distance;
        queue.push([x - 1, y, -1, 0, distance + 1]);
      }
      if (dx === 1 && dy === 0) {
        maze[y][x] = distance;
        queue.push([x, y - 1, 0, -1, distance + 1]);
      }
      break;
    }
    case "7": {
      if (dx === 1 && dy === 0) {
        maze[y][x] = distance;
        queue.push([x, y + 1, 0, 1, distance + 1]);
      }
      if (dx === 0 && dy === -1) {
        maze[y][x] = distance;
        queue.push([x - 1, y, -1, 0, distance + 1]);
      }
      break;
    }
    case "F": {
      if (dx === -1 && dy === 0) {
        maze[y][x] = distance;
        queue.push([x, y + 1, 0, 1, distance + 1]);
      }
      if (dx === 0 && dy === -1) {
        maze[y][x] = distance;
        queue.push([x + 1, y, 1, 0, distance + 1]);
      }
      break;
    }
  }
}

console.log(Math.max(...maze.flat().filter((c) => Number.isInteger(c))));
