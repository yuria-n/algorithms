/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function (points, K) {
  const distances = [];
  const map = new Map();

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const distance = x * x + y * y;
    distances.push(distance);
    const indices = map.get(distance) || [];
    indices.push(i);
    map.set(distance, indices);
  }

  distances.sort((n1, n2) => n2 - n1);

  const result = [];

  while (result.length < K) {
    const distance = distances.pop();
    for (const i of map.get(distance)) {
      result.push(points[i]);
    }
  }

  return result;
};
