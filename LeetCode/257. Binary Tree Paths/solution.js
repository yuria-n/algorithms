/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const paths = [];
  createPath(root, '');
  return paths;

  function createPath(node, path) {
    if (!node) {
      return;
    }

    path += (path.length ? '->' : '') + node.val;

    createPath(node.left, path);
    createPath(node.right, path);

    if (!node.left && !node.right) {
      paths.push(path);
    }
  }
};
