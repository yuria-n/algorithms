/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  costs.sort(([a0, b0], [a1, b1]) => b1 - a1 - (b0 - a0));
  const l = costs.length;
  let result = 0;
  for (let i = 0; i < l / 2; i++) {
    result += costs[i][0] + costs[l - i - 1][1];
  }
  return result;
};
