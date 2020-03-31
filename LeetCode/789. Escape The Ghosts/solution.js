/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
const escapeGhosts = function(ghosts, target) {
  const [tx, ty] = target;
  let distance = Math.abs(tx) + Math.abs(ty);
  for (const [x, y] of ghosts) {
    const d = Math.abs(tx - x) + Math.abs(ty - y);
    if (d <= distance) {
      return false;
    }
  }
  return true;
};
