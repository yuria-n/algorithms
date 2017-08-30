public class Solution {
    public boolean checkPerfectNumber(int num) {

      if(num <= 1) {
          return false;
      }

      int n = num;

      while(n % 2 == 0) {
          n /= 2;
      }
      int sum = n*(n+1)/2;

      return sum == num;
    }
}
