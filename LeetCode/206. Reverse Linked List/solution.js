// Iteratively
// time: O(n), space: O(1)
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
function reverseList(head) {
  let firstNode = null;
  while (head !== null) {
    [head.next, firstNode, head] = [firstNode, head, head.next];
  }
  return firstNode;
}

// Recursively
// time: O(n), space: O(0)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {ListNode|null} result
 * @return {ListNode}
 */
function reverseList2(head, result = null) {
    if (!head) {
      return result;
    }
    const next = head.next;
    head.next = result;
    return reverseList2(next, head);
}

// time: O(n), space: O(n)
function reverseList3(node) {
  let head = null;
  while (node !== null) {
    head = new ListNode(node.val, head);
    node = node.next;
  }
  return head;
}
