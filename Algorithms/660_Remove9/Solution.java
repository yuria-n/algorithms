class Solution {
    public int newInteger(int n) {

        String result = "";

        while (n > 0) {
            int r = n % 9;
            result = r + result;
            n /= 9;
        }

        return Integer.parseInt(result);
    }
}
