/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
  const judges = new Array(N).fill(true);
  const counts = new Array(N).fill(0);
  for (const [p, i] of trust) {
    judges[p - 1] = false;
    counts[i - 1]++;
  }
  for (const [i, count] of counts.entries()) {
    if (count === N - 1 && judges[i]) {
      return i + 1;
    }
  }
  return -1;
};
