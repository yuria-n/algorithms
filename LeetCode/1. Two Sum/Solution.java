public class Solution {
    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for(int i = 0; i < nums.length; i++) {

            int n = nums[i];

            if(map.containsKey(n)) {
                return new int[] {map.get(n), i};
            }

            map.put(target-n, i);
        }

        return new int[] {0, 0};
    }
}
