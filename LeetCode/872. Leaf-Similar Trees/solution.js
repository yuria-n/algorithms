/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  const leaves1 = dfs(root1, []);
  const leaves2 = dfs(root2, []);
  for (let i = 0; i < Math.max(leaves1.length, leaves2.length); i++) {
    if (leaves1[i] !== leaves2[i]) {
      return false;
    }
  }
  return true;

  function dfs(node, leaves) {
    if (!node) {
      return leaves;
    }
    const { val, left, right } = node;
    if (!left && !right) {
      leaves.push(val);
    }
    dfs(node.left, leaves);
    return dfs(node.right, leaves);
  }
};
