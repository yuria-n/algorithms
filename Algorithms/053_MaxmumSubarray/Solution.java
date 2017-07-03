public class Solution {
    public int maxSubArray(int[] nums) {

        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        int sum = 0;

        for(int i = 0; i < nums.length; i++) {
            int n = nums[i];
            sum += n;
            min = Math.min(min, sum);
            max = Math.max(max, n);
            max = Math.max(max, sum);
            if(sum != min) {
	            max = Math.max(max, sum - min);
            }
        }

        return max;
    }
}
