/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const prev = s[i + 1] || '';
    switch (s[i]) {
      case 'M':
        sum += 1000;
        break;
      case 'D':
        sum += 500;
        break;
      case 'C':
        sum += prev === 'D' || prev === 'M' ? -100 : 100;
        break;
      case 'L':
        sum += 50;
        break;
      case 'X':
        sum += prev === 'L' || prev === 'C' ? -10 : 10;
        break;
      case 'V':
        sum += 5;
        break;
      case 'I':
        sum += prev === 'V' || prev === 'X' ? -1 : 1;
        break;
      default:
        break;
    }
  }
  return sum;
};
