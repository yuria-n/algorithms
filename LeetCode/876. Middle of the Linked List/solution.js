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
const middleNode = function(head) {
  let result = head;

  while (head && head.next) {
    head = head.next.next;
    result = result.next;
  }

  return result;
};
