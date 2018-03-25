/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
const numberOfLines = function(widths, S) {
  const result = [1, 0];

  for (let i = 0; i < S.length; i++) {
    const len = widths[S[i].charCodeAt() - 97];

    if (result[1] + len > 100) {
      result[0]++;
      result[1] = len;
    } else {
      result[1] += len;
    }
  }

  return result;
};
