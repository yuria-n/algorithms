package Problems;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Scanner;

public class HuffmanEncoding {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int k = scan.nextInt();

        HashMap<String, String> map = new HashMap<>();
        ArrayList<String> digits = new ArrayList<>();

        for (int i = 0; i < k; i++) {
            String key = scan.next();
            String value = scan.next();
            map.put(key, value);
            digits.add(key);
        }

        scan.nextLine();
        String n = scan.nextLine();

        System.out.println(n + ": " + decodeBinary(k, map, digits, n));
    }

    private static String decodeBinary(int k, HashMap<String, String> map, ArrayList<String> digits, String n) {
        String result = "";

        while (!n.equals("")) {
            for (int i = 0; i < digits.size(); i++) {
                String d = digits.get(i);
                String value = map.get(d);
                int l = value.length();

                if (n.length() >= l) {
                    String p = n.substring(0, l);
                    if (value.equals(p)) {
                        result += d;
                        n = n.substring(l, n.length());
                    }
                }
            }
        }
        return result;
    }
}
