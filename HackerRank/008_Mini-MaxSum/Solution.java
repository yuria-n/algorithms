package HackerRank;

import java.util.*;

public class Solution {
    static long[] minMaxSum(int[] arr) {
        long[] result = {0, 0};
        Arrays.sort(arr);
        int l = arr.length;
        for (int i = 0; i < l - 1; i++) {
            result[0] += arr[i];
            result[1] += arr[l - i - 1];
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] arr = new int[5];
        for (int i = 0; i < 5; i++) {
            arr[i] = in.nextInt();
        }

        long[] result = minMaxSum(arr);
        System.out.printf(result[0] + " " + result[1]);
    }
}
