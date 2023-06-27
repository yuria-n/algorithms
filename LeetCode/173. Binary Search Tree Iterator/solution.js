/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class BSTIterator {
  /**
   * @param {TreeNode} root
   */
  constructor(root) {
    const queue = [];
    dfs(root);
    this.queue = queue;

    function dfs(node) {
      if (node === null) {
        return;
      }
      dfs(node.left);
      queue.push(node);
      dfs(node.right);
    }
  }

  /**
   * @return {number}
   */
  next() {
    return this.queue.shift().val;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.queue.length > 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
