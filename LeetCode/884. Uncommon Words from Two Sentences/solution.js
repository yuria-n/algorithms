/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function(A, B) {
  const map = {};

  A.split(' ').map((w) => {
    map[w] = (map[w] && ++map[w]) || 1;
  });

  B.split(' ').map((w) => {
    map[w] = (map[w] && ++map[w]) || 1;
  });

  const result = [];
  const words = Object.keys(map);
  words.map((w) => {
    if (map[w] === 1) {
      result.push(w);
    }
  });

  return result;
};
