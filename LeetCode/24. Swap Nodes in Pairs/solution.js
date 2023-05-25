/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    const result = head?.next ?? head;
    let pair = null;

    while (head) {
        if (pair === null) {
            pair = head;
            head = head.next;
            continue;
        }

        const next = head.next;
        head.next = pair;
        pair.next = next?.next ?? next;
        head = next;
        pair = null;
    }

    return result;
}
