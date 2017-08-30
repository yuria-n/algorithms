package Problems;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class ComputerPurchase {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        String best1 = "", best2 = "";
        int score1 = 0, score2 = 0;

        for (int i = 0; i < n; i++) {

            String name = scan.next();
            int r = scan.nextInt();
            int s = scan.nextInt();
            int d = scan.nextInt();

            int score = 2 * r + 3 * s + d;

            if (score > score1 || (score == score1 && name.compareTo(best1) < 0)) {
                score2 = score1;
                score1 = score;
                best2 = best1;
                best1 = name;
            } else if (score > score2 || (score == score2 && name.compareTo(best2) < 0)) {
                score2 = score;
                best2 = name;
            }
        }

        System.out.println(best1);
        System.out.println(best2);
    }
}
