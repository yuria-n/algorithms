/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = function(ghosts, target) {
  const [tx, ty] = target;
  const distance = calcDistance(tx, ty);
  return ghosts.every(([x, y]) => calcDistance(tx - x, ty - y) > distance);

  function calcDistance(dx, dy) {
    return Math.abs(dx) + Math.abs(dy);
  }
};
