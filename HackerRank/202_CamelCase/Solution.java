package HackerRank;

import java.util.*;

public class Solution {
    private static int getNumberOfWord(String s) {
        int l = s.length();
        if (l == 0) {
            return 0;
        }

        int count = 1;
        for (int i = 0; i < l; i++) {
            if (Character.isUpperCase(s.charAt(i))) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.next();

        System.out.println(getNumberOfWord(s));
    }
}
