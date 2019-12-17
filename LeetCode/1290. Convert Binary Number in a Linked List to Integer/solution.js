/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
  let binary;
  while (head) {
    binary <<= 1;
    binary |= head.val;
    head = head.next;
  }
  return binary;
};
