public class Solution {
    public boolean isPalindrome(int x) {

        if(x < 0) {
            return false;
        }

        int reverse = 0;
        int t = x;

        while(t != 0) {
            reverse = reverse * 10 + t % 10;
            t /= 10;
        }

        return x == reverse;
    }
}
