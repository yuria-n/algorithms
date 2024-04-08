/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    if (root === null) {
        return root === subRoot;
    }
    return dfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function dfs(node, subNode) {
    if (!node || !subNode) {
        return node === subNode;
    }
    if (node.val !== subNode.val) {
        return false;
    }
    return dfs(node.left, subNode.left) && dfs(node.right, subNode.right);
}
