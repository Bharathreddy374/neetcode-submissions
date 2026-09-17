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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;

        }
        let list2 = slow.next;
        slow.next = null
        let list1 = head;
        let prev = null
        while(list2){
            let temp=list2.next;
            list2.next = prev;
            prev = list2;
            list2 = temp;
        }
         list2 = prev;
        while (list2) {
            let temp1 = list1.next;
            let temp2 = list2.next;

            list1.next = list2;
            list2.next = temp1;

            list1 = temp1;
            list2 = temp2;
        }
    }
}
