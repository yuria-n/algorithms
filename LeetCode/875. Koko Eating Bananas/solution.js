/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let minK = r;

  if (piles.length === h) {
    return r;
  }

  while (l <= r) {
    const k = Math.floor((l + r) / 2);
    const time = piles.reduce((sum, pile) => sum + Math.ceil(pile / k), 0);
    if (time > h) {
      l = k + 1;
      continue;
    }
    minK = k;
    r = k - 1;
  }

  return minK;
}
