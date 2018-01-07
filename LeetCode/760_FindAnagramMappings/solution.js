/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = function(A, B) {
  const l = A.length;

  const map = {};
  for (let i = 0; i < l; i++) {
    map[B[i]] = i;
  }

  const result = new Array(l);
  for (let i = 0; i < l; i++) {
    result[i] = map[A[i]];
  }

  return result;
};
