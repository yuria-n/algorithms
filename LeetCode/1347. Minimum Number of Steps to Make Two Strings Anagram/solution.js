/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function(s, t) {
  const map = new Map();
  for (const char of s) {
    const count = map.get(char) || 0;
    map.set(char, count + 1);
  }

  let result = 0;
  for (const char of t) {
    const count = map.get(char) || 0;
    if (!count) {
      result++;
      continue;
    }
    map.set(char, count - 1);
  }

  return result;
};
