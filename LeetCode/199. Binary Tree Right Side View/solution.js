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
 * @return {number[]}
 */
function rightSideView(root) {
  const result = [];
  const stack = [[root, 0]];
  while (stack.length > 0) {
    const [node, i] = stack.pop();
    if (node === null) {
      continue;
    }
    const { val, left, right } = node;
    result[i] = val;
    stack.push([right, i + 1], [left, i + 1]);
  }
  return result;
}
