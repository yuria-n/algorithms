public class Solution {
    public int[][] matrixReshape(int[][] nums, int r, int c) {

        int r1 = nums.length;
        int c1 = nums[0].length;

        if(r*c != r1*c1) {
            return nums;
        }

        int[][] nums2 = new int[r][c];

        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c1; j++) {
                int n = c1*i+j;
                nums2[n/c][n%c] = nums[i][j];
            }
        }

        return nums2;
    }
}
