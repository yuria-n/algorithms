/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const l = digits.length - 1;
  digits[l]++;

  for (let i = l; i >= 0; i--) {
    let n = digits[i];
    if (n < 10) {
      continue;
    }
    digits[i] %= 10;
    n = Math.floor(n / 10);
    if (!!i) {
      digits[i - 1] += n;
      continue;
    }
    while (!!n) {
      digits.unshift(n % 10);
      n = Math.floor(n / 10);
    }
  }
  return digits;
};
