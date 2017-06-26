public class Solution {
    public int[][] matrixReshape(int[][] nums, int r, int c) {

        int[][] nums2 = new int[r][c];

        if(r*c == nums.length*nums[0].length) {

            LinkedList<Integer> store = new LinkedList<Integer>();

            for (int i = 0; i < nums.length; i++) {
                for (int j = 0; j < nums[i].length; j++) {
                    store.add(nums[i][j]);
                }
            }

            for (int i = 0; i < r; i++) {
                for (int j = 0; j < c; j++) {
                    nums2[i][j] = store.poll();
                }
            }
            return nums2;
        }
        return nums;
    }
}
