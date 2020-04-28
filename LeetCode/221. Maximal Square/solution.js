/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  let max = 0;
  const row = matrix.length;
  const col = !row ? 0 : matrix[0].length;
  const dp = Array.from({ length: row }, () => new Array(col).fill(0));
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      if (!~~matrix[y][x]) {
        continue;
      }
      const dia = !x || !y ? 0 : dp[y - 1][x - 1];
      const top = !y ? 0 : dp[y - 1][x];
      const left = !x ? 0 : dp[y][x - 1];
      const val = Math.min(dia, top, left);
      const cur = !val ? 1 : (Math.sqrt(val) + 1) ** 2;
      dp[y][x] = cur;
      max = Math.max(max, cur);
    }
  }
  return max;
};
