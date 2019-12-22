/**
 * @param {number} n
 * @return {number}
 */

// Top down DP
const climbStairs = function(n) {
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
};

// Bottom up DP
const climbStairs = function(n) {
  let curr = 1;
  let prev = 1;
  for (let i = 0; i <= n; i++) {
    const val = curr + prev;
    prev = curr;
    curr = val;
  }
  return curr;
};

const climbStairs = function(n) {
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = i <= 1 ? 1 : dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
