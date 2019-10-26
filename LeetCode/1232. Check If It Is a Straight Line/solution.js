/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
  const [[x0, y0], [x1, y1], ...rest] = coordinates;
  const dx = x1 - x0;
  const dy = y1 - y0;
  for (const [x, y] of rest) {
    const dxi = x - x0;
    const dyi = y - y0;
    if (dx * dyi !== dxi * dy) {
      return false;
    }
  }
  return true;
};
