public class Solution {
    public boolean isValid(String s) {

        if(s.equals("")) {
            return true;
        }

        LinkedList<String> p = new LinkedList<String>();

        for(int i = 0; i < s.length(); i++) {
            String t = s.substring(i, i+1);

            if(t.equals("(") || t.equals("{") || t.equals("[")) {
                p.addLast(t);
                continue;
            }

            if(t.equals("}")) {
                if(p.size() > 0) {
                    if(p.getLast().equals("{")) {
                        p.removeLast();
                        continue;
                    }
                }
                return false;
            }

            if(t.equals(")")) {
                if(p.size() > 0) {
                    if(p.getLast().equals("(")) {
                        p.removeLast();
                        continue;
                    }
                }
                return false;
            }

            if(t.equals("]")) {
                if(p.size() > 0) {
                    if(p.getLast().equals("[")) {
                        p.removeLast();
                        continue;
                    }
                }
                return false;
            }
        }

        return p.size() == 0;
    }
}
