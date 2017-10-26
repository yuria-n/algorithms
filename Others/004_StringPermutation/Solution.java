import java.util.HashMap;
import java.util.Scanner;

public class Permutation {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println(isPermutation(in.nextLine(), in.nextLine()));
    }

    private static boolean isPermutation(String str1, String str2) {
        int l1 = str1.length();
        if (l1 != str2.length()) {
            return false;
        }

        HashMap<Character, Integer> map1 = new HashMap<>();
        HashMap<Character, Integer> map2 = new HashMap<>();
        for (int i = 0; i < l1; i++) {
            char s1 = str1.charAt(i);
            char s2 = str2.charAt(i);
            int count = 1;
            map1.put(s1, map1.containsKey(s1) ? count + map1.get(s1) : count);
            map2.put(s2, map2.containsKey(s2) ? count + map2.get(s2) : count);
        }

        for (Character key : map1.keySet()) {
            if (!map1.get(key).equals(map2.get(key))) {
                return false;
            }
        }

        return true;
    }
}
