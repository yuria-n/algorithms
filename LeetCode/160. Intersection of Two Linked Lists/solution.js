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
  const arrA = [];
  while (headA) {
    arrA.push(headA);
    headA = headA.next;
  }

  const arrB = [];
  while (headB) {
    arrB.push(headB);
    headB = headB.next;
  }

  let result = null;
  for (let i = 0; i < arrA.length; i++) {
    const a = arrA[arrA.length - i - 1];
    const b = arrB[arrB.length - i - 1];
    if (a !== b) {
      return result;
    }
    result = a;
  }

  return result;
};
