/**
 * @param {number[]} chips
 * @return {number}
 */
const minCostToMoveChips = function(chips) {
  let odd = 0;
  let even = 0;
  for (const c of chips) {
    if (c % 2) {
      odd++;
      continue;
    }
    even++;
  }
  return Math.min(odd, even);
};
