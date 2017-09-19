package HackerRank;

import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = in.nextInt();
        }

        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < 100; i++) {
            map.put(i, 0);
        }

        for (int i = 0; i < n; i++) {
            int a = arr[i];
            int count = map.containsKey(a) ? map.get(a) + 1 : 0;
            map.put(a, count);
        }

        for (Object o : map.entrySet()) {
            Map.Entry m = (Map.Entry) o;
            System.out.print(m.getValue() + " ");
        }
    }
}
