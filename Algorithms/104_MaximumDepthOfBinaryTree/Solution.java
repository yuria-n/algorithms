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
    public int maxDepth(TreeNode root) {

        return this.exist(root);
    }

    private int exist(TreeNode node) {
        int depth = 0;

        if(node != null) {
            depth++;
            depth += Math.max(this.exist(node.left), this.exist(node.right));
        }

        return depth;
    }

}
