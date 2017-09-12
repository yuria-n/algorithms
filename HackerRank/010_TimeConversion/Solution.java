package HackerRank;

import java.util.*;

public class Solution {

    static String timeConversion(String s) {
        int l = s.length();
        int h = Integer.parseInt(s.substring(0, 2));
        String m = s.substring(l - 2, l);

        if (m.equals("AM") && h == 12) {
            h = 0;
        }

        if (m.equals("PM") && h != 12) {
            h += 12;
            h = (h >= 24 ? 0 : h);
        }

        return String.format("%02d", h) + s.substring(2, l - 2);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.next();
        String result = timeConversion(s);
        System.out.println(result);
    }
}
