/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let c = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = digits[i] + c;
    digits[i] = n % 10;
    c = n < 10 ? 0 : 1;
  }

  if (c) {
    digits.unshift(1);
  }

  return digits;
};
