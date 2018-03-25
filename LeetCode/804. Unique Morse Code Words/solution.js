/**
 * @param {string[]} words
 * @return {number}
 */

const alphabets = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];

const uniqueMorseRepresentations = function(words) {
  const map = {};
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let morse = '';
    for (let j = 0; j < word.length; j++) {
      const m = alphabets[word[j].charCodeAt() - 97];
      morse += m;
    }
    if (!map[morse]) {
      result++;
    }
    map[morse] = 1;
  }
  return result;
};
