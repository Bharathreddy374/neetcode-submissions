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
      let dummy = new ListNode(0,head)

      let slow = dummy
      let fast = dummy
      for(let u =0 ;u<n;u++){
        fast = fast.next;
      }
      while(fast.next !== null){
        fast= fast.next;
        slow= slow.next;
      }
      slow.next = slow.next.next
      return dummy.next;
    }
}
