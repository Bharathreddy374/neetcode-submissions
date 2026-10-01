/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inOrder(node) {
        if (!node || result !== null) return;

        inOrder(node.left);          // 1. left

        count++;                     // 2. node
        if (count === k) {
            result = node.val;
            return;
        }

        inOrder(node.right);         // 3. right
    }

    inOrder(root);
    return result;
}   
    
}
