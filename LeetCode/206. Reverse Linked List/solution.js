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
