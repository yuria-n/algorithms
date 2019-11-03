/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const arr = Array.from(new Array(n), () => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    arr[0][i] = 1;
  }
  for (let i = 0; i < n; i++) {
    arr[i][0] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const x = arr[i][j - 1] || 0;
      const y = arr[i - 1] ? arr[i - 1][j] : 0;
      arr[i][j] = x + y;
    }
  }
  return arr[n - 1][m - 1];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const arr = Array.from(new Array(n), () => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!i && !j) {
        continue;
      }
      const x = arr[i][j - 1] || 0;
      const y = arr[i - 1] ? arr[i - 1][j] : 0;
      arr[i][j] = !i || !j ? 1 : x + y;
    }
  }
  return arr[n - 1][m - 1] || 1;
};
