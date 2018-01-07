package HackerRank;

import java.util.*;

public class Solution {

    static int birthdayCakeCandles(int n, int[] arr) {
        int count = 0;
        int max = 0;
        for (int i = 0; i < n; i++) {
            int a = arr[i];
            if (a == max) {
                count++;
            } else if (a > max){
                count = 1;
                max = a;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }
        int result = birthdayCakeCandles(n, arr);
        System.out.println(result);
    }
}
