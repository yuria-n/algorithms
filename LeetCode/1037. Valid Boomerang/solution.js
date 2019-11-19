/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (
    !((x1 === x2 && y1 === y2) || (x2 === x3 && y2 === y3) || (x3 === x1 && y3 === y1)) &&
    (y2 - y1) / (x2 - x1) !== (y3 - y2) / (x3 - x2)
  );
};

const isBoomerang2 = function(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (x3 - x2) * (y2 - y1) !== (x2 - x1) * (y3 - y2);
};
