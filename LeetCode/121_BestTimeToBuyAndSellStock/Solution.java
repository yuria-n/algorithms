public class Solution {
    public int maxProfit(int[] prices) {

        int min = Integer.MAX_VALUE;
        int profit = 0;

        for(int i = 0; i < prices.length; i++) {
            int p = prices[i];
            min = Math.min(min, p);
            profit = Math.max(profit, p-min);
        }

        return profit;
    }
}
