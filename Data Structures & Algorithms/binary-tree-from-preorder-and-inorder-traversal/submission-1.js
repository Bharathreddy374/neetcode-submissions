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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // Preorder: root -> left -> right
        // Inorder: left -> root -> right
        const map = {};
        for (let i = 0; i < inorder.length; i++) {
            map[inorder[i]] = i;
        }

        let preorderIndex = 0;

        const build = (left, right) => {
            if (left > right) return null;
            const rootVal = preorder[preorderIndex];
            preorderIndex++;
            const mid = map[rootVal];
            const root = new TreeNode(rootVal);
            root.left = build(left, mid - 1);
            root.right = build(mid + 1, right);
            return root;
        };

        return build(0, inorder.length - 1);
    }
}
