/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function(A, B) {
  const map = {};
  count(A);
  count(B);
  return Object.keys(map).filter((w) => map[w] === 1);

  function count(str) {
    str.split(' ').forEach((w) => (map[w] = ++map[w] || 1));
  }
};
