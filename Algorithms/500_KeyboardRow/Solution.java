public class Solution {
    public String[] findWords(String[] words) {

        String l1 = "qwertyuiop";
        String l2 = "asdfghjkl";
        String l3 = "zxcvbnm";

        ArrayList<String> tmpArr = new ArrayList<String>();

        for(int i = 0; i < words.length; i++) {
            String w = words[i];
            int t = -1;
            char initial = Character.toLowerCase(w.charAt(0));

            if(l1.indexOf(initial) >= 0) {
                t = 1;
            }
            if(l2.indexOf(initial) >= 0) {
                t = 2;
            }
            if(l3.indexOf(initial) >= 0) {
                t = 3;
            }

            for(int j = 1; j < w.length(); j++) {
                char c = Character.toLowerCase(w.charAt(j));
                if(t == 1 && l1.indexOf(c) >= 0) {
                    continue;
                }
                if(t == 2 && l2.indexOf(c) >= 0) {
                    continue;
                }
                if(t == 3 && l3.indexOf(c) >= 0) {
                    continue;
                }
                t = -1;
                break;
            }
            if(t == 1 || t == 2 || t == 3) {
                tmpArr.add(w);
            }
        }

        int l = tmpArr.size();
        String[] results = new String[l];

        for(int j = 0; j < l; j++) {
            results[j] = tmpArr.get(j);
        }
        return results;
    }
}
