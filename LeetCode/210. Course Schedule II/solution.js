/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const dependents = Array.from({ length: numCourses }, () => new Set());
  const counts = Array.from({ length: numCourses }).fill(0);
  for (const [a, b] of prerequisites) {
    dependents[b].add(a);
    counts[a]++;
  }

  const result = [];
  for (let course = 0; course < counts.length; course++) {
    if (counts[course] === 0) {
      result.push(course);
    }
  }
  for (let course = 0; course < result.length; course++) {
    for (const c of dependents[result[course]]) {
      if (--counts[c] === 0) {
        result.push(c);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
