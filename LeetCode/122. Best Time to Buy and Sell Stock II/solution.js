/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    result += diff <= 0 ? 0 : diff;
  }
  return result;
};
