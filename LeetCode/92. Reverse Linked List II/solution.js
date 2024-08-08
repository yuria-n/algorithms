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
  head = new ListNode(null, head);
  let curNode = find(head, left - 1);
  const endNode = find(head, right);
  const tail = endNode.next;
  endNode.next = null;
  curNode.next = reverse(curNode.next);
  while (curNode?.next) {
    curNode = curNode.next;
  }
  curNode.next = tail;
  return head.next;

  function find(node, count) {
    if (count <= 0) {
      return node;
    }
    return find(node.next, count - 1);
  }

  function reverse(node) {
    let head = null;
    while (node) {
      [head, head.next, node] = [node, head, node.next];
    }
    return head;
  }
}
