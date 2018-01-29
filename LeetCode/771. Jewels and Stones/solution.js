/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  const map = {};
  for (let i = 0; i < J.length; i++) {
    map[J[i]] = 1;
  }

  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (map[S[i]]) {
      count++;
    }
  }
  return count;
};
