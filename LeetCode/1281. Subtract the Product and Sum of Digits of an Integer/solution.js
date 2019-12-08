/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  let prod = 1;
  let sum = 0;
  while (n > 0) {
    const num = n % 10;
    prod *= num;
    sum += num;
    n = Math.floor(n / 10);
  }
  return prod - sum;
};
