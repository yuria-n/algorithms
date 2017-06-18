public class Solution {
    public String longestCommonPrefix(String[] strs) {

        if(strs.length == 0) {
            return "";
        }

        String p = "";
        String s0 = strs[0];

        for(int i = 0; i < s0.length(); i++) {
            char c1 = s0.charAt(i);

            for(int j = 1; j < strs.length; j++) {
                String sj = strs[j];

                if(sj.length() <= i) {
                    return p;
                }
                char c2 = sj.charAt(i);

                if(c1 != c2) {
                    return p;
                }
            }
            p += c1;
        }
        return p;
    }
}
