/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (const [src, dst] of edges) {
    graph[src].push(dst);
    graph[dst].push(src);
  }

  let count = 0;
  const visited = new Array(n).fill(false);
  for (const node in graph) {
    if (valid(node)) {
      count++;
    }
  }

  return count;

  function valid(node) {
    if (visited[node]) {
      return false;
    }
    visited[node] = true;
    for (const neighbor of graph[node]) {
      valid(neighbor);
    }
    return true;
  }
}

module.exports = countComponents;
