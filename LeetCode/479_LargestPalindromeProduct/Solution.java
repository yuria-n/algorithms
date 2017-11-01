class Solution {
    public int largestPalindrome(int n) {

        if (n == 1) {
            return 9;
        }

        long result = 0;
        long max = (long) Math.pow(10, n) - 1;
        long min = (long) Math.pow(10, n - 1);

        long firstHalf = max * max / (long) Math.pow(10, n);

        find:
        while (firstHalf >= min) {
            long estimatePalindrome = generate(firstHalf);
            for (long i = max; i >= min; i--) {
                if (estimatePalindrome / i > max || i * i < estimatePalindrome) {
                    break;
                }
                if (estimatePalindrome % i == 0) {
                    result = estimatePalindrome;
                    break find;
                }
            }
            firstHalf--;
        }
        return (int) (result % 1337);
    }

    private static long generate(long n) {
        long p = n;
        while (n != 0) {
            p = p * 10 + n % 10;
            n /= 10;
        }
        return p;
    }
}
