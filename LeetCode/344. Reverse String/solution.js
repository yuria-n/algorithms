/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// for loop
const reverseString = function(s) {
  let result = '';

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  return result;
};

// while loop
const reverseString1 = function(s) {
  const l = s.length - 1;
  const half = l / 2;

  let i = -1;
  while (++i <= half) {
    const j = l - i;
    [s[i], s[j]] = [s[j], s[i]];
  }
};

// recursion
const reverseString2 = function(s) {
  const l = s.length - 1;
  const half = l / 2;
  reverse(0);

  function reverse(i) {
    if (i > half) {
      return;
    }
    const j = l - i;
    [s[i], s[j]] = [s[j], s[i]];
    return reverse(i + 1);
  }
};
