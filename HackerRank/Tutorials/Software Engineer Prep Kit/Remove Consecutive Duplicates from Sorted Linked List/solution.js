/*
 * Complete the 'deleteDuplicates' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST head as parameter.
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

function deleteDuplicates(head) {
  if (!head) {
    return head;
  }
  const result = head;
  let prev = head;
  head = head.next;
  while (head) {
    if (head.data === prev.data) {
      prev.next = head.next;
      head = prev.next;
    } else {
      prev = head;
    }
    head = prev.next;
  }
  return result;
}
