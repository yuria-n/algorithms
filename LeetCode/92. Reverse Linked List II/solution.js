/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
  if (head === null || left === right) {
    return head;
  }

  head = new ListNode(null, head);
  let node = head;

  for (let i = 0; i < left - 1; i++) {
    node = node.next;
  }

  let tail = node.next;

  for (let i = left; i < right; i++) {
    [node.next, node.next.next, tail.next] = [
      tail.next,
      node.next,
      tail.next.next,
    ];
  }

  return head.next;
}
