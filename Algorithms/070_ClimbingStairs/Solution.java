public class Solution {
    public int climbStairs(int n) {

        if (n <= 0) {
            return 0;
        }

        int[] steps = {1, 2};
        int count = 0;

        for(int i = 0; i < steps.length; i++) {
            int step = steps[i];

            count += step == n ? 1 : this.climbStairs(n-step);
        }

        return count;
    }
}
