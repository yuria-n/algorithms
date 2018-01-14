/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  const steps = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 2] + steps[i - 1];
  }

  return steps[n];
};
