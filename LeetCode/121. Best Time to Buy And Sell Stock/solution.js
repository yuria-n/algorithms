/**
 * @param {number[]} prices
 * @return {number}
 */

// Bottom up DP
function maxProfit(prices) {
  let min = Infinity;
  let profit = 0;

  for (const price of prices) {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }

  return profit;
}

// Top down DP
function maxProfit2(prices) {
  const min = getMinPrice(prices.length - 1);
  return getMaxProfit(prices.length - 1);

  function getMinPrice(i) {
    return Math.min(prices[i], i <= 0 ? Infinity : getMinPrice(i - 1));
  }

  function getMaxProfit(i) {
    return Math.max(prices[i] - min, i <= 0 ? 0 : getMaxProfit(i - 1));
  }
}

// Two pointers
function maxProfit3(prices) {
  let max = 0;
  let left = 0;
  let right = left + 1;
  while (right < prices.length) {
    const pl = prices[left];
    const pr = prices[right];
    max = Math.max(max, pr - pl);
    if (pl > pr) {
      left = right;
    }
    right++;
  }
  return max;
}
