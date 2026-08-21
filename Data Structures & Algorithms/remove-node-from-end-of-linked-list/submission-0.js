/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
      const dummy = new ListNode(0);
      dummy.next = head;

      let left = dummy;
      let right = dummy;

      for(let i =0; i<=n;i++){
        right = right.next;
      }
      while(right !== null){
        left = left.next;
        right = right.next;
      }
      left.next = left.next.next;
      return dummy.next;
    }
}
