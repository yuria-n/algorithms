public class Solution {
    public int maxProfit(int[] prices) {

        int l = prices.length;

        if(l <= 0) {
            return 0;
        }

        int min = prices[0];
        int profit = 0;

        for(int i = 1; i < l; i++) {
            int p = prices[i];
            if(p < min) {
                min = p;
            }
            if(profit < p - min) {
                profit = p - min;
            }
        }

        return profit;
    }
}
