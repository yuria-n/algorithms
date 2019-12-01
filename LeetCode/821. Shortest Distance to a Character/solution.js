/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
  const result = [];
  for (let i = 0; i < S.length; i++) {
    let j = 0;
    while (S[i + j] !== C && S[i - j] !== C) {
      j++;
    }
    result.push(j);
  }
  return result;
};
