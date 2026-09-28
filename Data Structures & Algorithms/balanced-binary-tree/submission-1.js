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
     * @return {boolean}
     */
    isBalanced(root) {
        if(this.dfs(root) === -1)
            return false;
        return true;
    }

    dfs(node, res) {
        if (node === null) {
            return 0;
        }
        const left = this.dfs(node.left);
        const right = this.dfs(node.right);
        if (left === -1 || right === -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    }
}
