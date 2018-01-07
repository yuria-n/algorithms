/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = function(A, B) {
  const map = {};
  for (let i = 0; i < B.length; i++) {
    map[B[i]] = i;
  }

  const result = [];
  for (let i = 0; i < A.length; i++) {
    result[i] = map[A[i]];
  }

  return result;
};
