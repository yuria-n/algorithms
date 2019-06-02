/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function(A) {
  const l = A.length;

  if (l < 3) {
    return false;
  }

  let maxIndex = 0;
  let maxVal = -Infinity;

  for (let i = 0; i < l; i++) {
    const val = A[i];
    if (val <= maxVal) {
      break;
    }
    maxIndex = i;
    maxVal = val;
  }

  if (maxIndex === 0 || maxIndex === l - 1) {
    return false;
  }

  let prevVal = -Infinity;
  for (let j = l - 1; j >= maxIndex; j--) {
    const val = A[j];
    if (val <= prevVal) {
      return false;
    }
    prevVal = val;
  }

  return true;
};
