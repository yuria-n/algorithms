/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  return generateWord(S) === generateWord(T);

  function generateWord(str) {
    let word = '';
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      const w = str[i];
      if (w === '#') {
        count++;
        continue;
      }
      if (count > 0) {
        count--;
        continue;
      }
      word = w + word;
    }
    return word;
  }
};
