/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function(A) {
  const l = A.length;

  if (l < 3) {
    return false;
  }

  let i = 0;
  while (i < l && A[i] < A[i + 1]) {
    i++;
  }

  if (i === 0 || i === l - 1) {
    return false;
  }

  while (i < l && A[i] > A[i + 1]) {
    i++;
  }

  return i === l - 1;
};
