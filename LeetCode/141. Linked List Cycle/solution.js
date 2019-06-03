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
const hasCycle = function(head) {
  const map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, true);
    head = head.next;
  }
  return false;
};

// O(1) space
const hasCycle2 = function(head) {
  if (!head) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
