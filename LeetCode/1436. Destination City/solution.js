/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function (paths) {
  const set = new Set(paths.map(([start]) => start));
  for (const [, dest] of paths) {
    if (!set.has(dest)) {
      return dest;
    }
  }
};
