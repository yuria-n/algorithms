/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
  const results = new Array(2).fill(0);

  for (let i = cost.length - 1; i >= 0; i--) {
    const t = cost[i] + Math.min(...results);
    [results[0], results[1]] = [t, results[0]];
  }

  return Math.min(...results);
};
