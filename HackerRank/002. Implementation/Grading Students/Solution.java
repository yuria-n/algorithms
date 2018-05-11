package HackerRank;

import java.util.*;

public class Solution {

  static int[] solve(int[] grades) {
      int l = grades.length;
      int[] finals = new int[l];

      for (int i = 0; i < l; i++) {
          int g = grades[i];
          int r = g % 5;
          if (g < 38 || r < 3) {
              finals[i] = g;
          } else {
              finals[i] = g + (5 - r);
          }
      }
      return finals;
  }

  public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
      int n = in.nextInt();
      int[] grades = new int[n];
      for (int grades_i = 0; grades_i < n; grades_i++) {
          grades[grades_i] = in.nextInt();
      }
      int[] result = solve(grades);
      for (int i = 0; i < result.length; i++) {
          System.out.print(result[i] + (i != result.length - 1 ? "\n" : ""));
      }
      System.out.println("");
  }
}
