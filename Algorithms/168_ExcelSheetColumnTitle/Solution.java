public class Solution {
    public String convertToTitle(int n) {

        final char[] DIGITS = {
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        };

        int l = DIGITS.length;
        String result = "";

        while (n > 0) {
            int i = n % l;

            switch (i) {
                case 0:
                    result = DIGITS[l - 1] + result;
                    break;
                default:
                    result = DIGITS[i - 1] + result;
            }

            n = (n - 1) / l;
        }

        return result;
    }
}
