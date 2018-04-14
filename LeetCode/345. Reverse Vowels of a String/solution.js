/**
 * @param {string} s
 * @return {string}
 */
const vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true,
};

const reverseVowels = function(s) {
  let result = '';
  const stacks = [];
  const l = s.length;
  for (let i = 0; i < l; i++) {
    const c = s[i];
    if (vowels[c]) {
      stacks.push(c);
    }
  }
  for (let i = 0; i < l; i++) {
    const c = s[i];
    result += vowels[c] ? stacks.pop() : c;
  }
  return result;
};
