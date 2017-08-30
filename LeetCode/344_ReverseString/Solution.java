public class Solution {
    public String reverseString(String s) {

        String result = "";

        for (int j = s.length(); j >= 1; j--) {

            result += s.substring(j-1, j);
        }

        return result;
    }
}
