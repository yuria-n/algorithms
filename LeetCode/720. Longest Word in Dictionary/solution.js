/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function(words) {
  words.sort();

  const map = {};
  let result = '';

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const l = w.length;
    if (l === 1 || map[w.substr(0, l - 1)]) {
      result = l > result.length ? w : result;
      map[w] = 1;
    }
  }
  return result;
};
