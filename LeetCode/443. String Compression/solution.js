/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  const charsLen = chars.length;
  let str = '';
  let count = 0;
  for (let i = 0; i <= charsLen; i++) {
    const char = chars[i] || '';
    if (chars[i - 1] === char) {
      count++;
      continue;
    }
    str += (count <= 1 ? '' : count) + char;
    count = 1;
  }
  const strLen = str.length;
  for (let i = 0; i < strLen; i++) {
    chars[i] = str[i];
  }
  chars.splice(strLen, charsLen - strLen);
};
