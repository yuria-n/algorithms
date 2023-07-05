/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(i, new Set([i]));
  }
  for (const [u, v] of edges) {
    map.get(u).add(v);
    map.get(v).add(u);
  }
  return validateEdge(destination, map.get(destination), new Set());

  function validateEdge(n, set, visited) {
    if (n === source) {
      return true;
    }

    visited.add(n);
    for (const m of set) {
      if (!visited.has(m) && validateEdge(m, map.get(m), visited)) {
        return true;
      }
    }

    return false;
  }
}
