package HackerRank;

import java.util.*;

public class Solution {
    static float[] plusMinus(int n, int[] arr) {
        float[] result = {0, 0, 0};
        for (float a : arr) {
            if (a > 0) {
                result[0]++;
            } else if (a < 0) {
                result[1]++;
            } else {
                result[2]++;
            }
        }
        for (int i = 0; i < result.length; i++) {
            result[i] /= n;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();

        }
        float[] result = plusMinus(n, arr);
        for (int i = 0; i < result.length; i++) {
            System.out.println(String.format("%f", result[i]));
        }
    }
}
