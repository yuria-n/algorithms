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
  let cur = head;

  for (let i = 1; i < left; i++) {
    cur = cur.next;
  }
  let tail = cur.next;

  for (let i = 1; i <= right - left; i++) {
    [tail.next, cur.next, cur.next.next] = [
      tail.next.next,
      tail.next,
      cur.next,
    ];
  }

  return head.next;
}
