/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
  const l = letters.length;

  if (letters[l - 1] <= target) {
    return letters[0];
  }

  for (let i = 0; i < l; i++) {
    const letter = letters[i];
    if (letter > target) {
      return letter;
    }
  }
};
