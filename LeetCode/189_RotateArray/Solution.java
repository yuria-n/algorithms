class Solution {
    public void rotate(int[] nums, int k) {
        int l = nums.length;
        if (l <= 1) {
            return;
        }

        k %= l;
        int[] arr = new int[l];
        for (int i = 0; i < l; i++) {
            int j = (i + k) % l;
            arr[j] = nums[i];
        }

        for (int i = 0; i < l; i++) {
            nums[i] = arr[i];
        }
    }
}
