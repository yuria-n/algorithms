/**
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = function(A) {
  const length = A.length;
  let result = -1;

  for (let i = 0; i < length; i++) {
    const a = A[i];
    if (a > 2) {
      continue;
    }

    for (let j = 0; j < length; j++) {
      if (j === i) {
        continue;
      }
      const ab = a * 10 + A[j];
      if (ab > 23) {
        continue;
      }

      for (let k = 0; k < length; k++) {
        if (k === i || k === j) {
          continue;
        }
        const c = A[k];
        if (c > 5) {
          continue;
        }

        for (let l = 0; l < length; l++) {
          if (l === i || l === j || l === k) {
            continue;
          }
          const cd = c * 10 + A[l];
          if (cd > 59) {
            continue;
          }
          result = Math.max(result, ab * 100 + cd);
        }
      }
    }
  }

  if (result < 0) {
    return '';
  }
  const hh = Math.floor(result / 100);
  const mm = result - hh * 100;
  return `${pad(hh)}:${pad(mm)}`;
};

function pad(n) {
  return n >= 10 ? n : `0${n}`;
}
