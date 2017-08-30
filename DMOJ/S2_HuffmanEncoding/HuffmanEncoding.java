import java.util.HashMap;
import java.util.Scanner;

public class HuffmanEncoding {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int k = scan.nextInt();

        HashMap<String, String> map = new HashMap<>();

        for (int i = 0; i < k; i++) {
            String digit = scan.next();
            String value = scan.next();
            map.put(value, digit);
        }

        scan.nextLine();
        String n = scan.nextLine();

        System.out.println(n + ": " + decodeBinary(k, map, n));
    }

    private static String decodeBinary(int k, HashMap<String, String> map, String n) {
        String result = "";
        String str = "";

        for (int i = 0; i < n.length(); i++) {
            str += n.substring(i, i + 1);

            if (!map.containsKey(str)) {
                continue;
            }

            result += map.get(str);
            str = "";
        }
        return result;
    }
}
