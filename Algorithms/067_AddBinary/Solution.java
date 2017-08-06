public class Solution {
    public String addBinary(String a, String b) {

        int la = a.length();
        int lb = b.length();
        int l = Math.max(la, lb);

        if(l == 0) {
            return "0";
        }

        String result = "";
        int next = 0;

        for (int j = l-1; j >= 0; j--) {
            int ia = j-(l-la);
            int a1 = ia < 0 ? 0 : a.charAt(ia) == '0' ? 0 : 1;
            int ib = j-(l-lb);
            int b1 = ib < 0 ? 0 : b.charAt(ib) == '0' ? 0 : 1;

            int sum = a1 + b1 + next;
            result = (sum % 2 == 0 ? 0 : 1 ) + result;
            next = sum >= 2 ? 1 : 0;
        }

        return next == 0 ? result : 1 + result;
    }
}
