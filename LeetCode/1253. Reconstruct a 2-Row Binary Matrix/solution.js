/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
const reconstructMatrix = function(upper, lower, colsum) {
  const length = colsum.length;
  const matrix = Array.from(new Array(2), () => new Array(length).fill(0));
  let upperSum = 0;
  let lowerSum = 0;
  for (let i = 0; i < length; i++) {
    const sum = colsum[i];
    if (sum === 0) {
      continue;
    }
    if (sum === 2) {
      matrix[0][i] = 1;
      matrix[1][i] = 1;
      upperSum++;
      lowerSum++;
    }
    if (upperSum > upper || lowerSum > lower) {
      return [];
    }
  }

  for (let i = 0; i < length; i++) {
    const sum = colsum[i];
    if (sum === 0 || sum === 2) {
      continue;
    }
    if (upperSum >= upper) {
      matrix[1][i] = 1;
      lowerSum++;
    } else {
      matrix[0][i] = 1;
      upperSum++;
    }
  }
  return upperSum !== upper || lowerSum !== lower ? [] : matrix;
};
