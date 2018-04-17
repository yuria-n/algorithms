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

  const wordKeys = Object.keys(wordMap);
  let result = wordKeys.shift();
  wordKeys.forEach(key => {
    if (wordMap[key] > wordMap[result]) {
      result = key;
    }
  });

  return result;
};

const mostCommonWord2 = function(paragraph, banned) {
  const bannedMap = {};
  for (let i = 0; i < banned.length; i++) {
    const word = banned[i];
    bannedMap[word] = true;
  }
  const words = paragraph.toLowerCase().split(/[!?',;.\s]/g);
  const l = words.length;

  const wordMap = {};
  for (let i = 0; i < l; i++) {
    const word = words[i];
    if (!bannedMap[word] && word.length) {
      wordMap[word] = ++wordMap[word] || 1;
    }
  }

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
