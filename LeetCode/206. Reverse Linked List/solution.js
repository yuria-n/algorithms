/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iteratively
const reverseList = function(head) {
  let result = null;

  while (head) {
    let t = head.next;
    head.next = result;
    result = head;
    head = t;
  }

  return result;
};

// Recursively
const reverseList2 = function(head) {
  return helper(head, null);

  function helper(node, result) {
    if (!node) {
      return result;
    }
    const next = node.next;
    node.next = result;
    return helper(next, node);
  }
};
