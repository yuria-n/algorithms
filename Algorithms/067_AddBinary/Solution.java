public class Solution {
    public String addBinary(String a, String b) {

        String result = "";

        int la = a.length();
        int lb = b.length();
        int l = Math.max(la, lb);

        int next = 0;

        if(l == 0) {
            return "0";
        }

        for (int j = l-1; j >= 0; j--) {
            char a1;
            if (j-(l-la) < 0) {
                a1 = 0;
            } else {
                a1 = a.charAt(j-(l-la));
            }
            char b1;
            if (j-(l-lb) < 0) {
                b1 = 0;
            } else {
                b1 = b.charAt(j-(l-lb));
            }

            int sum = 0 + next;
            next = 0;
            if(a1 == '1') {
                sum++;
            }
            if(b1 == '1') {
                sum++;
            }
            if(sum % 2 == 0) {
                result = 0 + result;
            }
            if(sum % 2 == 1) {
                result = 1 + result;
            }
            if(sum >= 2) {
                next = 1;
            }
        }

        if(next != 0) {
            result = 1 + result;
        }

        return result;
    }
}
