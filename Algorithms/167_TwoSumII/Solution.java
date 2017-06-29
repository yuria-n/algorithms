public class Solution {
    public int[] twoSum(int[] numbers, int target) {

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for(int i = 0; i < numbers.length; i++) {

            int n = numbers[i];

            if(map.containsKey(n)) {
                return new int[] {map.get(n), i+1};
            }

            map.put(target-n, i+1);
        }

        return new int[] {0, 0};
    }
}
