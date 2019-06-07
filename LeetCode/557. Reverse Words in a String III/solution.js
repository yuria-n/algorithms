/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  let result = '';
  let word = '';

  for (const n of s) {
    if (n !== ' ') {
      word = n + word;
      continue;
    }
    result += word + n;
    word = '';
  }

  return result + word;
};
