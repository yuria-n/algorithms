/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const preRequisite = Array.from({ length: numCourses }, () => []);
  for (const [c, p] of prerequisites) {
    preRequisite[c].push(p);
  }
  const taken = new Map();
  return Array.from(preRequisite.keys()).every(takeCourse);

  function takeCourse(c) {
    if (taken.has(c)) {
      return taken.get(c);
    }
    taken.set(c, false);
    if (!preRequisite[c].every(takeCourse)) {
      return false;
    }
    taken.set(c, true);
    return true;
  }
}
