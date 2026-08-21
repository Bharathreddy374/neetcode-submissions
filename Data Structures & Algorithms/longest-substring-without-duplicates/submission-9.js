class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0,maxLen=0;
        let map=new Map();
        for(let r=0;r<s.length;r++){
            let char=s[r];
            if(map.has(char)){
                l=Math.max(l,map.get(char)+1);
            }
            map.set(char,r);
            maxLen=Math.max(maxLen,r-l+1);
        }
        return maxLen;
    }
}
