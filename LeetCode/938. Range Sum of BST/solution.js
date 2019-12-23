/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
  if (!root) {
    return 0;
  }
  const { val, right, left } = root;
  if (val < L) {
    return rangeSumBST(right, L, R);
  }
  if (val > R) {
    return rangeSumBST(left, L, R);
  }
  return val + rangeSumBST(left, L, R) + rangeSumBST(right, L, R);
};

const rangeSumBST1 = function(root, L, R) {
  let result = 0;
  calc(root);
  return result;

  function calc(node) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    calc(left);
    if (val >= L && val <= R) {
      result += val;
    }
    calc(right);
  }
};

const rangeSumBST2 = function(root, L, R) {
  if (!root) {
    return 0;
  }
  const val = root.val >= L && root.val <= R ? root.val : 0;
  return val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};
