package HackerRank;

import java.util.*;

public class Solution {
    static String[] staircase(int n) {
        String[] result = new String[n];
        for (int i = 0; i < n; i++) {
            String spaces = "";
            String sharps = "";
            for (int j = 0; j < n - i - 1; j++) {
                spaces += " ";
            }
            for (int j = 0; j < i + 1; j++) {
                sharps += "#";
            }
            result[i] = spaces + sharps;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();

        String[] result = staircase(n);
        for (String r : result) {
            System.out.println(r);
        }
    }
}
