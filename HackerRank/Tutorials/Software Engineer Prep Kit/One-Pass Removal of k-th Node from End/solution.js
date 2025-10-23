/*
 * Complete the 'removeKthNodeFromEnd' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST head
 *  2. INTEGER k
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function removeKthNodeFromEnd(node, k) {
  function removeKthNode(node, k) {
    if (!node) {
      return { node, index: -1 };
    }
    const { node: nextNode, index: nextIndex } = removeKthNode(node.next, k);
    const index = nextIndex + 1;
    node.next = nextNode;
    if (index !== k) {
      return { node, index: index };
    }
    return { node: node.next, index: index };
  }

  return removeKthNode(node, k).node;
}
