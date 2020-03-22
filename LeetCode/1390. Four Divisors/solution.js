/**
 * @param {number[]} nums
 * @return {number}
 */
const sumFourDivisors = function(nums) {
  let result = 0;
  for (const num of nums) {
    result += getSubTotal(num);
  }
  return result;

  function getSubTotal(num) {
    let count = 0;
    let subTotal = 0;
    let i = Math.floor(Math.sqrt(num));
    if (i * i === num) {
      return 0;
    }
    while (i > 0) {
      if (count > 4) {
        return 0;
      }
      if (num % i === 0) {
        subTotal += i + num / i;
        count += 2;
      }
      i--;
    }
    return count !== 4 ? 0 : subTotal;
  }
};
