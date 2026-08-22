class Solution {
    reorderList(head) {
        if (!head || !head.next) return;

        // Find middle
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // Split
        let second = slow.next;
        slow.next = null;

        // Reverse second half
        let prev = null;

        while (second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        second = prev;

        // Merge
        let list1 = head;

        while (second) {
            let temp1 = list1.next;
            let temp2 = second.next;

            list1.next = second;
            second.next = temp1;

            list1 = temp1;
            second = temp2;
        }
    }
}