class Solution {
    public boolean isAnagram(String s, String t) {
        int l = s.length();

        if (l != t.length()) {
            return false;
        }

        HashMap<String, Integer> mapS = new HashMap<>();
        HashMap<String, Integer> mapT = new HashMap<>();
        for (int i = 0; i < l; i++) {
            String c1 = s.substring(i, i + 1);
            int count1 = mapS.containsKey(c1) ? mapS.get(c1) + 1 : 1;
            mapS.put(c1, count1);

            String c2 = t.substring(i, i + 1);
            int count2 = mapT.containsKey(c2) ? mapT.get(c2) + 1 : 1;
            mapT.put(c2, count2);
        }

        for (Object o : mapS.entrySet()) {
            Map.Entry m = (Map.Entry) o;
            if (!mapT.entrySet().contains(m)) {
                return false;
            }
        }
        return true;
    }
}
