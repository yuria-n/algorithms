/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const courseList = Array.from({ length: numCourses }, () => []);
  const counts = Array.from({ length: numCourses }).fill(0);
  for (const [c, p] of prerequisites) {
    courseList[p].push(c);
    counts[c]++;
  }

  const result = [];
  for (let c = 0; c < numCourses; c++) {
    if (counts[c] === 0) {
      result.push(c);
    }
  }

  for (const course of result) {
    for (const c of courseList[course]) {
      if (--counts[c] === 0) {
        result.push(c);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
