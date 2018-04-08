package HackerRank;

import java.util.*;

public class Solution {

    static String super_reduced_string(String s) {
        LinkedList<Character> letters = new LinkedList<>();
        int l = s.length();

        if (l < 2) {
            return s;
        }

        letters.add(s.charAt(0));
        for (int i = 1; i < l; i++) {
            char c = s.charAt(i);

            if (!letters.isEmpty() && c == letters.getLast()) {
                letters.removeLast();
            } else {
                letters.addLast(c);
            }
        }

        if (letters.isEmpty()) {
            return "Empty String";
        }

        String result = "";
        for (Character c : letters) {
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
