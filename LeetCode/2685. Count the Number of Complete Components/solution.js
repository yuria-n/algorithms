/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countCompleteComponents(n, edges) {
  let result = 0;

  const edgeMap = new Map();
  for (let i = 0; i < n; i++) {
    edgeMap.set(i, new Set([i]));
  }
  for (const [a, b] of edges) {
    edgeMap.get(a).add(b);
    edgeMap.get(b).add(a);
  }
  const visitedSet = new Set();

  for (let i = 0; i < n; i++) {
    if (visitedSet.has(i)) {
      continue;
    }
    if (validateEdge(i, edgeMap.get(i), edgeMap.get(i), new Set())) {
      result++;
    }
    for (const num of edgeMap.get(i)) {
      visitedSet.add(num);
    }
  }

  return result;

  function validateEdge(num, curSet, prevSet, visited) {
    if (visited.has(num)) {
      return true;
    }
    if (curSet.size !== prevSet.size) {
      return false;
    }
    for (const num of prevSet) {
      if (!curSet.has(num)) {
        return false;
      }
    }
    visited.add(num);
    for (const n of curSet) {
      if (!validateEdge(n, edgeMap.get(n), curSet, visited)) {
        return false;
      }
    }
    return true;
  }
}
