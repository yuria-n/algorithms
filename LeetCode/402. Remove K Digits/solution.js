/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  let i = 1;
  while (i <= num.length && k > 0) {
    const n1 = +num[i - 1] || 0;
    const n2 = +num[i] || 0;
    if (n2 > 0 && n1 <= n2) {
      i++;
      continue;
    }
    num = num.slice(0, i - 1) + num.slice(i);
    while (num.length > 1 && +num[0] === 0) {
      num = num.slice(1);
    }
    k--;
    i--;
  }
  return num || '0';
};

// console.log(removeKdigits('1432219', 3));
// console.log(removeKdigits('10200', 1));
// console.log(removeKdigits('10200', 2));
// console.log(removeKdigits('10', 2));
// console.log(removeKdigits('1224', 3));
// console.log(removeKdigits('10200', 3));
// console.log(removeKdigits('9', 1));
// console.log(removeKdigits('1107', 1));
// console.log(removeKdigits('1002003', 2));
