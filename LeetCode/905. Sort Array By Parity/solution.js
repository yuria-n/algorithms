/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length - 1;

  while (i !== j) {
    if (A[i] % 2 === 0) {
      i++;
      continue;
    }
    let t = A[i];
    A[i] = A[j];
    A[j] = t;
    j--;
  }

  return A;
};
