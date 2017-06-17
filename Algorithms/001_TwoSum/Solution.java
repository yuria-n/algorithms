public class Solution {
    public int[] twoSum(int[] nums, int target) {

        int a = 0;
        int b = 0;

        int i1 = 0;
        int i2 = 0;

        for(int i = 0; i < nums.length; i++) {
            a = nums[i];
            i1 = i;

            for(int j = i+1; j < nums.length; j++) {
                b = nums[j];
                i2 = j;

                if(a+b == target) {
                    return new int[]{i1, i2};
                }
            }
        }
        return new int[]{0, 0};
    }
}
