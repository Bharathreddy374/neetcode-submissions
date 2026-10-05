class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.idx = -1;
        this.refs = 0;
    }

    addWord(word, index) {
        let curr = this;

        curr.refs++;

        for (const char of word) {
            const i = char.charCodeAt(0) - 97;

            if (curr.children[i] === null) {
                curr.children[i] = new TrieNode();
            }

            curr = curr.children[i];
            curr.refs++;
        }

        curr.idx = index;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {

        const root = new TrieNode();

        // Build Trie
        for (let i = 0; i < words.length; i++) {
            root.addWord(words[i], i);
        }

        const ROWS = board.length;
        const COLS = board[0].length;

        const result = [];

        const getIndex = (char) => {
            return char.charCodeAt(0) - 97;
        };

        const dfs = (row, col, node) => {

            // Invalid position / visited / no Trie path
            if (
                row < 0 ||
                col < 0 ||
                row >= ROWS ||
                col >= COLS ||
                board[row][col] === "*"
            ) {
                return 0;
            }

            const char = board[row][col];
            const index = getIndex(char);

            if (node.children[index] === null) {
                return 0;
            }

            // Move into Trie
            const previous = node;
            node = node.children[index];

            // Mark board cell as visited
            board[row][col] = "*";

            let found = 0;

            // Complete word found
            if (node.idx !== -1) {
                result.push(words[node.idx]);

                // Prevent duplicate
                node.idx = -1;

                found++;
            }

            // Explore 4 directions
            found += dfs(row + 1, col, node);
            found += dfs(row - 1, col, node);
            found += dfs(row, col + 1, node);
            found += dfs(row, col - 1, node);

            // Restore board
            board[row][col] = char;

            // Remove found words from reference count
            node.refs -= found;

            // Delete exhausted Trie branch
            if (node.refs === 0) {
                previous.children[index] = null;
            }

            return found;
        };

        // Start DFS from every cell
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {

                root.refs -= dfs(row, col, root);

                // No words remaining
                if (root.refs === 0) {
                    return result;
                }
            }
        }

        return result;
    }
}