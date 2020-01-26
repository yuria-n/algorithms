/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function(A, K) {
  A.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < A.length; i++) {
    const n = A[i];
    if (K && n < 0) {
      A[i] = -n;
      K--;
    }
  }
  A.sort((n1, n2) => n1 - n2);
  if (K % 2) {
    A[0] = -A[0];
  }
  return A.reduce((n, sum) => (n += sum));
};

// -1, -4, -2, -3, 1, 2, 3
// 4
// 3
// 6
// 昇順でソートする -4, -3, -2, -1, 0, 1, 2, 3
// もしマイナス部分の数がKより小さい場合、すべてを変換する。そうでない場合、小さいもの順に変える 4, 3, 2, 1, 0, 1, 2, 3
// もしKが余った場合（あまりをmとする）、mが奇数の場合、最小値を変える、そうでない場合そのまま
// sumして返す
