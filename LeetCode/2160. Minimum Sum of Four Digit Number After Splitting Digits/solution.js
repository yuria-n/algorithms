/**
 * @param {number} num
 * @return {number}
 */
function minimumSum(num) {
  const digits = `${num}`.split("").sort();
  return Number(digits[0] + digits[2]) + Number(digits[1] + digits[3]);
}

/**
 * @param {number} num
 * @return {number}
 */
function minimumSum2(num) {
  const digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  digits.sort((a, b) => a - b);
  return newNum(digits[0], digits[2]) + newNum(digits[1], digits[3]);
}

function newNum(a, b) {
  return a * 10 + b;
}
