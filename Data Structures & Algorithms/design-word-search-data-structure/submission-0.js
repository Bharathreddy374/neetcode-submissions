class TrieNode{
     constructor() {
        this.children = Array(26).fill(null);
        this.word = false;
    }
}
class WordDictionary {
    constructor() {
       this.root = new TrieNode();
    }
    getIndex(c){
        return c.charCodeAt(0)-'a'.charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;
        for(const c of word){
            const idx = this.getIndex(c);
            if(cur.children[idx]=== null){
                cur.children[idx] = new TrieNode();
            }
            cur = cur.children[idx];
        }
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word,0,this.root);
    }
    dfs(word,j,root){
        let curr = root;
        for(let i =j;i<word.length;i++){
            const c = word[i];
            if(c === '.'){
                for(const child of curr.children){
                    if(child !== null && this.dfs(word,i+1,child)) return true;
                }
                return false;
            }else{
                const idx = this.getIndex(c);
                if(curr.children[idx] === null) return false;
                curr = curr.children[idx];
            }
        }
        return curr.word
    }
}
