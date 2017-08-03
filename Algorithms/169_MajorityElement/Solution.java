public class Solution {

    public int majorityElement(int[] nums) {

        HashMap<Integer, Integer> map = new HashMap();
        int half = nums.length / 2;

        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            int count = map.containsKey(n) ? map.get(n) + 1 : 1;

            if (count > half) {
                return n;
            }

            map.put(n, count);
        }

        return 0;
    }
}
