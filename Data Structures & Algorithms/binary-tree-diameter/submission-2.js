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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
    let diameter = 0;
    function traverse(node){
        if(node == null) return 0;

        let left = traverse(node.left);
        let right = traverse(node.right);
        diameter = Math.max(diameter,left+right);
        return 1 + Math.max(left,right);
    }
    traverse(root);
    return diameter;

    
}
}
