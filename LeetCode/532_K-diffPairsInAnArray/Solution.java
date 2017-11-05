public class Solution {
    public int findPairs(int[] nums, int k) {
        if (k < 0) {
            return 0;
        }

        int l = nums.length;
        int count = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < l; i++) {
            int n = nums[i];
            int value = !map.containsKey(n) ? 1 : (map.get(n) + 1);
            map.put(n, value);
        }
        for (int i = 0; i < l; i++) {
            int n = nums[i];
            if (k == 0) {
                if (map.containsKey(n - k) && map.get(n - k) > 1) {
                    count++;
                    map.remove(n - k);
                }
            } else if (map.containsKey(n - k) && map.get(n - k) > 0) {
                count++;
                map.remove(n - k);
            }
        }

        return count;
    }
}
