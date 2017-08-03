public class Solution {

    public int majorityElement(int[] nums) {

        int n = nums[0];

        if (nums.length <= 1) {
            return n;
        }

        HashMap<Integer, Integer> map = new HashMap();

        for (int i = 0; i < nums.length; i++) {
            n = nums[i];
            int count;

            if (map.containsKey(n)) {
                count = map.get(n) + 1;
            } else {
                count = 1;
            }
            map.put(n, count);
        }

        for (int i : map.keySet()) {

            if (map.get(i) > nums.length / 2) {
                return i;
            }
        }

        return 0;
    }
}
