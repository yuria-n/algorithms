/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }

  let t = new TreeNode();
  if (t1 && t2) {
    t.val = t1.val + t2.val;
  } else if (t1) {
    t.val = t1.val;
  } else if (t2) {
    t.val = t2.val;
  }

  t.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
  t.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);

  return t;
};
