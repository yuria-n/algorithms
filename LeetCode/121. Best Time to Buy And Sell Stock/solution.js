/**
 * @param {number[]} prices
 * @return {number}
 */

// Bottom up DP
const maxProfit = function(prices) {
  let min = Infinity;
  let profit = 0;

  for (const price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }

  return profit;
};

// Top down DP
const maxProfit = function(prices) {
  const min = getMinPrice(prices.length - 1);
  return getMaxProfit(prices.length - 1);

  function getMinPrice(i) {
    return Math.min(prices[i], i <= 0 ? Infinity : getMinPrice(i - 1));
  }

  function getMaxProfit(i) {
    const cur = Math.max(prices[i] - min, i <= 0 ? 0 : getMaxProfit(i - 1));
    console.log(i, cur);
    return cur;
  }
};
