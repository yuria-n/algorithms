/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const result = new ListNode();
  let node = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
    node.next = new ListNode(val % 10);
    node = node.next;
    carry = Math.floor(val / 10);
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return result.next;
}
