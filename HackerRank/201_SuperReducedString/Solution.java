package HackerRank;

import java.util.*;

public class Solution {

    static String super_reduced_string(String s) {
        ArrayList<String> list = new ArrayList<>();

        for (int i = 0; i < s.length(); i++) {
            String c2 = s.substring(i, i + 1);
            int l = list.size();
            if (l <= 0) {
                list.add(c2);
                continue;
            }

            String c1 = list.get(l - 1);
            if (!c2.equals(c1)) {
                list.add(c2);
            } else {
                list.remove(c1);
            }
        }

        if (list.size() == 0) {
            return "Empty String";
        }

        String result = "";
        for (String c : list) {
            result += c;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.next();
        String result = super_reduced_string(s);
        System.out.println(result);
    }
}
