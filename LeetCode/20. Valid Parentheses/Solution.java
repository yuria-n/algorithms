public class Solution {
    public boolean isValid(String s) {

        LinkedList<String> p = new LinkedList<String>();

        for(int i = 0; i < s.length(); i++) {
            String t = s.substring(i, i+1);

            switch(t) {
                case "(":
                case "{":
                case "[":
                    p.push(t);
                    break;
                case ")":
                    if(p.size() > 0 && p.pop().equals("(")) {
                        break;
                    }
                    return false;
                case "}":
                    if(p.size() > 0 && p.pop().equals("{")) {
                        break;
                    }
                    return false;
                case "]":
                    if(p.size() > 0 && p.pop().equals("[")) {
                        break;
                    }
                    return false;
            }
        }

        return p.size() == 0;
    }
}
