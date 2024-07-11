/**
 * @param {number} x
 * @return {number}
 */

const MAX_VALUE = 2147483647;
const MIN_VALUE = -2147483648;

function reverse(x) {
  const positive = x >= 0;
  let result = 0;
  x = Math.abs(x);

  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  result = positive ? result : -result;
  return result < MIN_VALUE || result > MAX_VALUE ? 0 : result;
}
