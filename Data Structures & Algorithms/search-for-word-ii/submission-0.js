class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */

    findWords(board, words) {

        class TrieNode {
            constructor() {
                this.children = new Array(26).fill(null);
                this.word = null;
            }
        }

        const root = new TrieNode();

        // Build Trie
        for (let word of words) {

            let current = root;

            for (let char of word) {

                let index = char.charCodeAt(0) - 97;

                if (current.children[index] === null) {
                    current.children[index] = new TrieNode();
                }

                current = current.children[index];
            }

            current.word = word;
        }

        const result = [];

        const rows = board.length;
        const cols = board[0].length;

        function dfs(row, col, node) {

            // Boundary check
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols
            ) {
                return;
            }

            // Already visited
            if (board[row][col] === "#") {
                return;
            }

            let char = board[row][col];
            let index = char.charCodeAt(0) - 97;

            // Not a valid Trie path
            if (node.children[index] === null) {
                return;
            }

            node = node.children[index];

            // Found a word
            if (node.word !== null) {
                result.push(node.word);

                // Prevent duplicate
                node.word = null;
            }

            // Mark visited
            board[row][col] = "#";

            // Explore four directions
            dfs(row + 1, col, node);
            dfs(row - 1, col, node);
            dfs(row, col + 1, node);
            dfs(row, col - 1, node);

            // Backtrack
            board[row][col] = char;
        }

        // Start DFS from every cell
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dfs(row, col, root);
            }
        }

        return result;
    }
}