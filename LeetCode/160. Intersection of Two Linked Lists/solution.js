/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  const initialHeadB = headB;

  while (headA) {
    if (!headB) {
      headA = headA.next;
      headB = initialHeadB;
      continue;
    }

    if (headA === headB) {
      return headA;
    }

    headB = headB.next;
  }

  return null;
};
