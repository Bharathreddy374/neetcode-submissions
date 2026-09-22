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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let nodes = []
        for(let list of lists){
            while(list){
                nodes.push(list.val);
                list = list.next;
            }
        }
        nodes.sort((a,b) => a-b);

        let res = new ListNode(0);
        let curr = res;
        for(let node of nodes){
            curr.next = new ListNode(node);
            curr = curr.next;
        }
        return res.next;
    }
}
