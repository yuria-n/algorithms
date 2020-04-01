const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  const l = s.length;
  const indices = [];
  for (let i = 0; i < l; i++) {
    if (vowels.has(s[i])) {
      indices.push(i);
    }
  }
  let result = '';
  for (let i = 0; i < l; i++) {
    const k = vowels.has(s[i]) ? indices.pop() : i;
    result += s[k];
  }
  return result;
};

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  const regex = /[aeiou]/i;
  let prefix = '';
  let suffix = '';
  let i = -1;
  let j = s.length;
  while (++i < --j) {
    if (!regex.test(s[i])) {
      prefix += s[i];
      j++;
      continue;
    }
    if (!regex.test(s[j])) {
      suffix = s[j] + suffix;
      i--;
      continue;
    }
    prefix += s[j];
    suffix = s[i] + suffix;
  }
  return prefix + (i === j ? s[i] : '') + suffix;
};
