public class Solution_350 {
    public int[] intersect(int[] nums1, int[] nums2) {
        ArrayList match = new ArrayList();

        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums1.length; i++) {
            int n = nums1[i];
            int count = 1;
            if (map.containsKey(n)) {
                count += map.get(n);
            }
            map.put(n, count);
        }

        for (int i = 0; i < nums2.length; i++) {
            int n = nums2[i];
            int count = map.containsKey(n) ? map.get(n) : 0;
            if (count != 0) {
                match.add(n);
                map.put(n, count - 1);
            }
        }

        int l = match.size();
        int[] result = new int[l];
        for (int i = 0; i < l; i++) {
            result[i] = (int) match.get(i);
        }

        return result;
    }
}
