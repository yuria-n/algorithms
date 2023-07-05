/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter(edges) {
  const map = new Map();
  for (const [u, v] of edges) {
    pushEdge(u, v);
    pushEdge(v, u);
  }

  let result = 0;
  let max = 0;
  for (const [n, conns] of map) {
    max = Math.max(conns.length, max);
    if (conns.length === max) {
      result = n;
    }
  }
  return result;

  function pushEdge(a, b) {
    if (!map.has(a)) {
      map.set(a, []);
    }
    map.get(a).push(b);
  }
}

/**
 * @param {number[][]} edges
 * @return {number}
 */
function findCenter2(edges) {
  const arr = Array.from({ length: edges.length * 2 }).fill(0);
  for (const [u, v] of edges) {
    arr[u]++;
    arr[v]++;
  }
  const max = Math.max(...arr);
  return arr.findIndex((n) => n === max);
}
