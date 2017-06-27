public class Solution {
    public int[] plusOne(int[] digits) {

        if(digits.length == 0) {
            return new int[]{1};
        }

        LinkedList<Integer> sum = new LinkedList<Integer>();

        int l = digits.length-1;
        digits[l] = digits[l]+1;

        for(int j = l; j >= 0; j--) {
            int n = digits[j];

            sum.addFirst(n%10);
            if(n < 10) {
                continue;
            }

            if(j != 0) {
                digits[j-1] += n/10;
                continue;
            }
            n = n/10;
            while(n != 0) {
                sum.addFirst(n%10);
                n /= 10;
            }
        }

        int size = sum.size();
        int[] results = new int[size];

        for(int i = 0; i < size; i++) {
            results[i] = sum.poll();
        }

        return results;
    }
}
