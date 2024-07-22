/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const adjacencyList = Array.from({ length: numCourses }, () => []);
  for (const [c, p] of prerequisites) {
    adjacencyList[c].push(p);
  }
  const taken = new Map();
  return adjacencyList.every((_, c) => takeCourse(c));

  function takeCourse(c) {
    if (taken.has(c)) {
      return taken.get(c);
    }
    taken.set(c, false);
    if (!adjacencyList[c].every(takeCourse)) {
      return false;
    }
    taken.set(c, true);
    return true;
  }
}
