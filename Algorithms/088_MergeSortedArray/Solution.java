public class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {

        while(m > 0 && n > 0) {

            int n1 = nums1[m-1];
            int n2 = nums2[n-1];
            int index = m+n-1;

            if(n1 > n2) {
                nums1[index] = n1;
                m--;
            } else {
                nums1[index] = n2;
                n--;
            }
        }

        for(int i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }
}
