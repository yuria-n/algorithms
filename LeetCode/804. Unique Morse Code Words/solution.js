// Solution 1
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

/**
 * @param {string[]} words
 * @return {number}
 */
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

// Solution 2
const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const code = [
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

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const map = new Map();
  for (const [i, char] of alphabets.entries()) {
    map.set(char, code[i]);
  }

  const set = new Set();
  for (const word of words) {
    let c = '';
    for (const char of word) {
      c += map.get(char);
    }
    set.add(c);
  }
  return set.size;
};

// Solution 3
const list = [
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

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const set = new Set();
  for (const word of words) {
    let code = '';
    for (const char of word) {
      const i = char.charCodeAt() - 97;
      code += list[i];
    }
    set.add(code);
  }
  return set.size;
};
