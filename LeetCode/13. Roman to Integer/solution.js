/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const p = s[i + 1];
    switch (s[i]) {
      case 'M':
        sum += 1000;
        break;
      case 'D':
        sum += 500;
        break;
      case 'C':
        sum += p === 'D' || p === 'M' ? -100 : 100;
        break;
      case 'L':
        sum += 50;
        break;
      case 'X':
        sum += p === 'L' || p === 'C' ? -10 : 10;
        break;
      case 'V':
        sum += 5;
        break;
      case 'I':
        sum += p === 'V' || p === 'X' ? -1 : 1;
        break;
      default:
        break;
    }
  }
  return sum;
};

const map = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
const romanToInt = function(s) {
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const m = map[s[i + 1]];
    const n = map[s[i]];
    sum += n < m ? -n : n;
  }
  return sum;
};
