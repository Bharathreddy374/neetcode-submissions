class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = new Map();
        for(let word of strs){
            const key = word.split('').sort().join('');
            if(!group.has(key)){
                group.set(key,[]);
            }
            group.get(key).push(word);
        }
        return [...group.values()];
        
    }
}
