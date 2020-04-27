/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const l1 = text1.length;
  const l2 = text2.length;
  const dp = Array.from({ length: l2 }, () => new Array(l1).fill(0));
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      const c1 = text1[i];
      const c2 = text2[j];
      const prev = !i || !j ? 0 : dp[j - 1][i - 1];
      const cur = prev + (c1 === c2 ? 1 : 0);
      const top = !j ? 0 : dp[j - 1][i];
      const left = !i ? 0 : dp[j][i - 1];
      dp[j][i] = Math.max(cur, top, left);
    }
  }
  return dp[l2 - 1][l1 - 1];
};
