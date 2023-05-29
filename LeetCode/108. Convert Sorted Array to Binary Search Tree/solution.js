/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  return bst(nums, 0, nums.length - 1);

  function bst(nums, start, end) {
    if (start > end) {
      return null;
    }
    const middle = Math.ceil((start + end) / 2);
    const node = new TreeNode(nums[middle]);
    node.left = bst(nums, start, middle - 1);
    node.right = bst(nums, middle + 1, end);

    return node;
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST2(nums) {
  return createNode(0, nums.length);

  function createNode(il, ir) {
    if (il >= ir) {
      return null;
    }
    const im = Math.floor((il + ir) / 2);
    return new TreeNode(nums[im], createNode(il, im), createNode(im + 1, ir));
  }
}
