/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  const map = new Map();

  for (const [u, v] of edges) {
    pushEdge(u, v);
    pushEdge(v, u);
  }

  return validateEdge(source, new Set());

  function pushEdge(a, b) {
    if (!map.has(a)) {
      map.set(a, []);
    }
    map.get(a).push(b);
  }

  function validateEdge(n, visited) {
    if (n === destination) {
      return true;
    }

    visited.add(n);
    return map.get(n).some((m) => !visited.has(m) && validateEdge(m, visited));
  }
}
