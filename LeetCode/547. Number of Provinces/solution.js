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
    markProvince(i);
  }
  return result;

  function markProvince(num) {
    visitedSet.add(num);
    for (let i = 0; i < isConnected.length; i++) {
      if (visitedSet.has(i) || isConnected[num][i] === 0) {
        continue;
      }
      markProvince(i);
    }
  }
}
