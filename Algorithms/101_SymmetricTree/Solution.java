/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public boolean isSymmetric(TreeNode root) {

        if(root == null) {
            return true;
        }

        TreeNode l = root.left;
        TreeNode r = root.right;

        return this.isSameNode(l, r);
    }

    private boolean isSameNode(TreeNode l, TreeNode r) {

        if(l == null && r == null) {
            return true;
        }
        if(l == null || r == null) {
            return false;
        }

        if(l.val != r.val) {
            return false;
        }

        return this.isSameNode(l.left, r.right) && this.isSameNode(l.right, r.left);
    }
}
