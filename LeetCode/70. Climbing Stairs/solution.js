/**
 * @param {number} n
 * @return {number}
 */

// Top down DP (recursion)
function climbStairs(n) {
  const map = new Map();
  return helper(n);

  function helper(i) {
    if (map.has(i)) {
      return map.get(i);
    }
    const val = i <= 1 ? 1 : helper(i - 1) + helper(i - 2);
    map.set(i, val);
    return val;
  }
}

// Bottom up DP (optimized)
function climbStairs(n) {
  let prev = 1;
  let cur = 1;
  for (let i = 1; i < n; i++) {
    const next = prev + cur;
    prev = cur;
    cur = next;
  }
  return cur;
}

// Bottom up DP (fundamental)
function climbStairs(n) {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = i <= 1 ? 1 : dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
