/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function(points) {
  let result = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const [ax, ay] = points[i];
    const [bx, by] = points[i + 1];
    result += Math.max(Math.abs(bx - ax), Math.abs(by - ay));
  }
  return result;
};
