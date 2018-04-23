/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  let firstNode = null;
  let node = new ListNode();
  while (head) {
    if (head.val !== val) {
      node.next = new ListNode();
      node = node.next;
      node.val = head.val;
      if (!firstNode) {
        firstNode = node;
      }
    }
    head = head.next;
  }
  return firstNode;
};

// Array version:
const removeIndex = function(arr, val) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      result.push(arr[i]);
    }
  }
  return arr;
};
