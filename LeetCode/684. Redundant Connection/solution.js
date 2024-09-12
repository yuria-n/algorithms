/**
 * @param {number[][]} edges
 * @return {number[]}
 */
function findRedundantConnection(edges) {
  const parents = Array.from({ length: edges.length + 1 }, (_, i) => i);

  function find(x) {
    if (x !== parents[x]) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  }

  function union(x, y) {
    parents[find(y)] = find(x);
  }

  for (const [a, b] of edges) {
    if (find(a) === find(b)) {
      return [a, b];
    }
    union(a, b);
  }
}
