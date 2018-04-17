/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function(paragraph, banned) {
  const bannedMap = {};
  banned.forEach(word => (bannedMap[word] = true));

  const words = paragraph.toLowerCase().split(/[!?',;.\s]/g);
  const wordMap = {};
  words.forEach(word => {
    if (!bannedMap[word] && word.length) {
      wordMap[word] = ++wordMap[word] || 1;
    }
  });

  let resultWord = '';
  let max = 0;
  Object.keys(wordMap).forEach(word => {
    if (max < wordMap[word]) {
      max = wordMap[word];
      resultWord = word;
    }
  });
  return resultWord;
};
