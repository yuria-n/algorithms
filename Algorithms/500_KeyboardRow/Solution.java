public class Solution {

    private static final String[] LETTERS = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};

    private static final HashMap<Character, Integer> MAP = new HashMap<>();

    static {
        for (int i = 0; i < LETTERS.length; i++) {
            for (int j = 0; j < LETTERS[i].length(); j++) {
                MAP.put(LETTERS[i].charAt(j), i);
                MAP.put(Character.toUpperCase(LETTERS[i].charAt(j)), i);
            }
        }
    }

    public String[] findWords(String[] words) {

        LinkedList<String> temporaryList = new LinkedList<>();

        for (int i = 0; i < words.length; i++) {

            String w = words[i];
            int value = MAP.get(w.charAt(0));

            for (int j = 1; j < w.length(); j++) {

                if (value == MAP.get(w.charAt(j))) {
                    continue;
                } else {
                    value = -1;
                    break;
                }
            }

            if (value != -1) {
                temporaryList.add(w);
            }
        }

        int l = temporaryList.size();
        String[] results = new String[l];

        for (int i = 0; i < l; i++) {
            results[i] = temporaryList.get(i);
        }

        return results;
    }
}
