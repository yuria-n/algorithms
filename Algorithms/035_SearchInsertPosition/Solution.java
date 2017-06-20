public class Solution {
    public int searchInsert(int[] nums, int target) {

        int p = 0;

        for(int i = 0; i < nums.length; i++) {
            int s = nums[i];

            if(s >= target) {
                p = i;
                break;
            } else {
                p = i+1;
            }
        }
        return p;
    }
}
