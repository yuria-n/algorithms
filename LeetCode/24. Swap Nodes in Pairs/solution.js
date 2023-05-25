/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
  const result = head?.next ?? head;
  let pair = null;

  while (head) {
    if (pair === null) {
      pair = head;
      head = head.next;
      continue;
    }

    [head.next, pair.next, head] = [
      pair,
      head.next?.next ?? head.next,
      head.next,
    ];
    pair = null;
  }

  return result;
}
