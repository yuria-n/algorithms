public class Solution {
    public int findPairs(int[] nums, int k) {

        if (k < 0) {
            return 0;
        }

        int l = nums.length;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < l; i++) {
            int n = nums[i];
            int value = !map.containsKey(n) ? 1 : (map.get(n) + 1);
            map.put(n, value);
        }

        int count = 0;
        int value = k == 0 ? 1 : 0;
        for (int i = 0; i < l; i++) {
            int key = nums[i] - k;
            if (map.containsKey(key) && map.get(key) > value) {
                count++;
                map.remove(key);
            }
        }

        return count;
    }
}
