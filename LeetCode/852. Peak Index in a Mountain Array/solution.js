/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
  let max = -Infinity;
  let index = -1;

  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    if (num < max) {
      break;
    }
    max = num;
    index = i;
  }
  return index;
};
