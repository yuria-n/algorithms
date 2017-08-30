import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class ComputerPurchase {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        scan.nextLine();
        ArrayList<Data> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            list.add(new Data(scan.nextLine()));
        }

        Collections.sort(list, new Comparator<Data>() {
            @Override
            public int compare(Data d1, Data d2) {
                int s1 = d1.getScore();
                int s2 = d2.getScore();
                return s1 != s2 ? s2 - s1 : d2.getName().compareTo(d1.getName());
            }
        });

        System.out.println(list.get(0).getName());
        System.out.println(list.get(1).getName());
    }

    static class Data {
        private String name;
        private int r;
        private int s;
        private int d;

        public Data(String str) {
            String[] parts = str.split(" ");
            name = parts[0];
            r = Integer.parseInt(parts[1]);
            s = Integer.parseInt(parts[2]);
            d = Integer.parseInt(parts[3]);

        }

        public String getName() {
            return name;
        }

        public int getScore() {
            return 2 * r + 3 * s + d;
        }
    }
}
