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
function reverseList(head) {
  let result = null;

  while (head) {
    let t = head.next;
    head.next = result;
    result = head;
    head = t;
  }

  return result;
}

// Recursively
function reverseList2(head) {
  return helper(head, null);

  function helper(node, result) {
    if (!node) {
      return result;
    }
    const next = node.next;
    node.next = result;
    return helper(next, node);
  }
}

function reverseList3(node) {
  let current = null;
  while (node !== null) {
    current = new ListNode(node.val, current);
    node = node.next;
  }
  return current;
}
