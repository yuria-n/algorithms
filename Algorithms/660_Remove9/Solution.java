public class Solution {
    public int newInteger(int n) {

        final int DIGITS[] = {0, 1, 2, 3, 4, 5, 6, 7, 8};

        if (n <= 1) {
            return 1;
        }

        int l = DIGITS.length;
        String result = "";

        while (n > 0) {
            int r = n % l;
            result = DIGITS[r] + result;
            n /= l;
        }

        return Integer.parseInt(result);
    }
}
