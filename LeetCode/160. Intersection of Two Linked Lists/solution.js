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
  const mapB = new Set();
  while (headB) {
    mapB.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (mapB.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }

  return null;
};

const getIntersectionNode2 = function(headA, headB) {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }

  return a;
};
