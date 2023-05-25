/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n) space
function hasCycle(head) {
  const visited = new Set();
  while(head !== null) {
    if (visited.has(head)) {
      return true;
    }
    visited.add(head);
    head = head.next;
  }
  return false;
};

// O(1) space
function hasCycle2(head) {
  let slow = head;
  let fast = head?.next;
  while(fast !== null && fast !== undefined) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next?.next;
  }
  return false;
};
