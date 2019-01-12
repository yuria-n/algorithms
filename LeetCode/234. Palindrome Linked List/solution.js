/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const l = arr.length;

  for (let i = 0; i <= l / 2; i++) {
    if (arr[i] !== arr[l - i - 1]) {
      return false;
    }
  }

  return true;
};
