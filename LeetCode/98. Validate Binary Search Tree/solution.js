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
 * @return {boolean}
 */
function isValidBST(root) {
  let prev = -Infinity;
  return dfs(root);

  function dfs(node) {
    if (node === null) {
      return true;
    }
    const { val, left, right } = node;
    const isValidLeft = dfs(left);
    if (val <= prev) {
      return false;
    }
    prev = val;
    return isValidLeft && dfs(right);
  }
}

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
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
function isValidBST2(root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }
  if ((min && root.val <= min.val) || (max && root.val >= max.val)) {
    return false;
  }
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}
