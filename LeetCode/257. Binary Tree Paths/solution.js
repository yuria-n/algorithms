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

const binaryTreePaths2 = function(root) {
  const result = [];
  helper(root, '');
  return result;

  function helper(node, cur) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    cur += val;
    if (!left && !right && cur) {
      result.push(cur);
      return;
    }
    cur += '->';
    helper(left, cur);
    helper(right, cur);
  }
};
