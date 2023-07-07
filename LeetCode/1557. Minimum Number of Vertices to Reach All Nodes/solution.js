/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findSmallestSetOfVertices(n, edges) {
  const set = new Set();
  for (const [_, v] of edges) {
    set.add(v);
  }
  const result = [];
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
}
