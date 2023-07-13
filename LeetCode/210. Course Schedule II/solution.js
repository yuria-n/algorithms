/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
  const dependents = Array.from({ length: numCourses }, () => new Set());
  for (const [a, b] of prerequisites) {
    dependents[b].add(a);
  }

  const counts = Array.from({ length: numCourses }).fill(0);
  for (const [a] of prerequisites) {
    counts[a]++;
  }

  const result = [];
  let curCourses = [];
  for (let course = 0; course < counts.length; course++) {
    if (counts[course] === 0) {
      curCourses.push(course);
    }
  }
  result.push(...curCourses);

  while (result.length < numCourses) {
    if (curCourses.length === 0) {
      return curCourses;
    }
    curCourses = getCourses(curCourses, dependents, counts);
    result.push(...curCourses);
  }

  return result;
}

function getCourses(curCourses, dependents, counts) {
  const nextCourses = [];
  for (const curCourse of curCourses) {
    for (const course of dependents[curCourse]) {
      counts[course]--;
      if (counts[course] === 0) {
        nextCourses.push(course);
      }
    }
  }
  return nextCourses;
}
