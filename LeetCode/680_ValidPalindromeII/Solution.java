class Solution {
    public boolean validPalindrome(String s) {
        return checkPalindrome(s, true);
    }

    private boolean checkPalindrome(String s, boolean isFirst) {
        int l = s.length();

        for (int i = 0; i < l / 2; i++) {
            int j = l - i - 1;
            char left = s.charAt(i);
            char right = s.charAt(j);
            if (left != right) {
                if (!isFirst) {
                    return false;
                }
                return
                    checkPalindrome(s.substring(i + 1, j + 1), false) ||
                    checkPalindrome(s.substring(i, j), false);
            }
        }
        return true;
    }
}
