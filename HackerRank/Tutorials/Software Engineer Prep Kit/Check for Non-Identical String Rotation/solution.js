/*
 * Complete the 'isNonTrivialRotation' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function isNonTrivialRotation(s1, s2) {
  if (s1 === s2) {
    return 0;
  }

  const l = s1.length;

  root: for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      if (s1[j] !== s2[(j + i) % l]) {
        continue root;
      }
    }
    return 1;
  }

  return 0;
}
