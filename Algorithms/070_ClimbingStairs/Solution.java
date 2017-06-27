public class Solution {
    public int climbStairs(int n) {

        if (n <= 0) {
            return 0;
        }

        int[] steps = {1, 2};

        int count = 0;

        for(int i = 0; i < steps.length; i++) {
            int step = steps[i];

            if(step == n) {
                count++;
            }

            if(step != n && step == 1) {
                // 1つ前の結果をcountにたす(step == 1)
                count += this.climbStairs(n-1);
            }

            if(step != n && step == 2) {
                // stepが2のときn = 1のときの結果をたす
                count += this.climbStairs(n-2);
            }

        }

        return count;
    }
}
