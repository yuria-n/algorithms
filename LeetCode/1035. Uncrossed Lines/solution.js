/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = function (A, B) {
  const la = A.length;
  const lb = B.length;
  const dp = Array.from({ length: lb }, () => new Array(la).fill(0));

  for (let i = 0; i < lb; i++) {
    for (let j = 0; j < la; j++) {
      if (A[j] === B[i]) {
        const prev = i === 0 || j === 0 ? 0 : dp[i - 1][j - 1];
        dp[i][j] = prev + 1;
        continue;
      }
      const top = i === 0 ? 0 : dp[i - 1][j];
      const left = j === 0 ? 0 : dp[i][j - 1];
      dp[i][j] = Math.max(top, left);
    }
  }

  return dp[lb - 1][la - 1];
};
