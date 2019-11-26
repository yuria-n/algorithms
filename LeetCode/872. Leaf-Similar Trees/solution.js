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
  const leaves1 = [];
  const leaves2 = [];
  dfs(root1, leaves1);
  dfs(root2, leaves2);
  return (
    leaves1.length === leaves2.length && leaves1.every((leaf, i) => leaf === leaves2[i])
  );

  function dfs(node, leaves) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    if (!left && !right) {
      leaves.push(val);
    }
    dfs(node.left, leaves);
    dfs(node.right, leaves);
  }
};

const leafSimilar = function(root1, root2) {
  return dfs(root1, '') === dfs(root2, '');

  function dfs(node, leaves) {
    if (!node) {
      return leaves;
    }
    const { val, left, right } = node;
    if (!left && !right) {
      leaves += ` ${val}`;
      return leaves;
    }
    return dfs(node.left, leaves) + dfs(node.right, leaves);
  }
};
