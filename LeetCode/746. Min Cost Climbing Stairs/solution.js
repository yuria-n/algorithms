/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  const results = new Array(2).fill(0);

  for (let i = cost.length - 1; i >= 0; i--) {
    const t = cost[i] + Math.min(...results);
    [results[0], results[1]] = [t, results[0]];
  }

  return Math.min(...results);
}

/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs2(cost) {
  const mins = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    [mins[0], mins[1]] = [mins[1], Math.min(...mins) + cost[i]];
  }

  return Math.min(...mins);
}
