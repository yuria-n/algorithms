package HackerRank;

import java.util.*;

public class Solution {
    static int diagonalDifference(int n, int[][] matrix) {
        int d1 = 0;
        int d2 = 0;
        for (int i = 0; i < n; i++) {
            d1 += matrix[i][i];
            d2 += matrix[i][n - i - 1];
        }
        return Math.abs(d1 - d2);

    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[][] arr = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j] = in.nextInt();
            }
        }
        int result = diagonalDifference(n, arr);
        System.out.println(result);
    }
}
