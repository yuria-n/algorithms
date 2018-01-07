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

        LinkedList<String> results = new LinkedList<>();

        nextWord:
        for (int i = 0; i < words.length; i++) {

            String w = words[i];
            int rowIndex = MAP.get(w.charAt(0));

            for (int j = 1; j < w.length(); j++) {

                if (rowIndex != MAP.get(w.charAt(j))) {
                    continue nextWord;
                }
            }
            results.add(w);
        }

        return results.toArray(new String[results.size()]);
    }
}
