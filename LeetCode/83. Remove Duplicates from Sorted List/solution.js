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
const deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  const result = head;
  let prev = head;
  while (head.next) {
    head = head.next;

    if (prev.val === head.val) {
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
  }
  return result;
};

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
const deleteDuplicates2 = function(head) {
  const result = head;
  deleteDup(head);
  return result;

  function deleteDup(node) {
    if (!node) {
      return;
    }

    while (node.next && node.val === node.next.val) {
      const n = node.next.next;
      node.next = n;
      deleteDup(n);
    }

    return deleteDup(node.next);
  }
};
