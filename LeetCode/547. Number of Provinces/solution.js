/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
  const visitedSet = new Set();
  let result = 0;

  for (let i = 0; i < isConnected.length; i++) {
    if (visitedSet.has(i)) {
      continue;
    }
    result++;
    const visited = findCities(i, new Set());
    for (const num of visited) {
      visitedSet.add(num);
    }
  }

  return result;

  function findCities(num, visited) {
    if (visited.has(num)) {
      return visited;
    }
    visited.add(num);
    for (let i = 0; i < isConnected.length; i++) {
      if (i === num || visited.has(i) || isConnected[num][i] === 0) {
        continue;
      }
      for (const n of findCities(i, visited)) {
        visited.add(n);
      }
    }
    return visited;
  }
}
