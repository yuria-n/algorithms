public class Solution {
    public int lengthOfLastWord(String s) {

        int lastWord = 0;
        int l = s.length();

        for(int j = l-1; j >= 0; j--) {
            char c = s.charAt(j);

            if(c == ' ') {
                if(lastWord > 0) {
                    break;
                }
                continue;
            }
            lastWord++;
        }

        return lastWord;
    }
}
