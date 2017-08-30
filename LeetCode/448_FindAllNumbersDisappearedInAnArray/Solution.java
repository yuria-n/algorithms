public class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {

        int l = nums.length;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for(int i = 0; i < l; i++) {
            int n = nums[i];
            map.put(n,n);
        }

        ArrayList<Integer> result = new ArrayList<Integer>();
        for(int i = 1; i <= l; i++) {
            if(!map.containsKey(i)) {
                result.add(i);
            }
        }

        return result;
    }
}
