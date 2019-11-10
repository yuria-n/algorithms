/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function(days, costs) {
  const [cost0, cost1, cost2] = costs;
  const dp = [0];
  let t = 0;
  for (let i = 1; i <= days[days.length - 1]; i++) {
    if (days[t] !== i) {
      dp[i] = dp[i - 1];
      continue;
    }
    const sum0 = dp[i - 1] + cost0;
    const sum1 = (dp[i - 7] || 0) + cost1;
    const sum2 = (dp[i - 30] || 0) + cost2;
    dp[i] = Math.min(sum0, sum1, sum2);
    t++;
  }
  return dp[dp.length - 1];
};
