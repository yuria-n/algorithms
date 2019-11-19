/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
class FindElements {
  constructor(root) {
    const set = new Set();
    this.set = set;

    root.val = 0;
    dfs(root);

    function dfs(node) {
      if (!node) {
        return;
      }
      const { val, left, right } = node;
      set.add(val);
      if (left) {
        left.val = 2 * val + 1;
        dfs(left);
      }
      if (right) {
        right.val = 2 * val + 2;
        dfs(right);
      }
    }
  }

  /**
   * @param {number} target
   * @return {boolean}
   */
  find(target) {
    return this.set.has(target);
  }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
