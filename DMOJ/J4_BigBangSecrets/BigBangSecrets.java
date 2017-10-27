import java.util.Scanner;

public class BigBangSecrets {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int k = in.nextInt();
        in.nextLine();
        String str = in.nextLine();
        System.out.println(decodeSecrets(k, str));
    }

    private static String decodeSecrets(int k, String str) {
        int l = str.length();
        if (l == 0) {
            return "";
        }

        String result = "";
        for (int i = 0; i < l; i++) {
            int s = 3 * (i + 1) + k;
            char c = str.charAt(i);
            c -= s;

            if (c < 65) {
                c += 26;
            }

            result += String.valueOf(c);
        }

        return result;
    }
}
