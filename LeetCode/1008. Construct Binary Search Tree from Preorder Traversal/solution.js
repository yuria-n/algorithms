/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
  if (!preorder.length) {
    return null;
  }
  const [val, ...rest] = preorder;
  const root = new TreeNode(val);
  const i = find(val, rest);
  root.left = bstFromPreorder(rest.slice(0, i));
  root.right = bstFromPreorder(rest.slice(i, rest.length));
  return root;
};

function find(target, arr) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const val = arr[mid];
    if (val < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

// TODO use index instead of array.slice
