public class Solution {
    public boolean checkPerfectNumber(int num) {

        int divisors = 0;

        for (int j = num - 1; j >= 1; j--) {
            if (num % j == 0) {
                divisors += j;
            }
        }

        return num == divisors;
    }
}
