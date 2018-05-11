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
const sortedArrayToBST = function(nums) {
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
};
