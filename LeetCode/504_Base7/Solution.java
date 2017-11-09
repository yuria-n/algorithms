public class Solution {
    public String convertToBase7(int num) {
        if (num == 0) {
            return "0";
        }

        String result = "";
        int n = Math.abs(num);

        while (n != 0) {
            int r = n % 7;
            result = r + result;
            n /= 7;
        }

        return (num < 0 ? "-" : "") + result;
    }
}
