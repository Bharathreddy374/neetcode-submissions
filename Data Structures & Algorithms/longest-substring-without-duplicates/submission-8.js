class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let left = 0;
        let maxlen = 0;
        for (let r =0 ; r<s.length;r++){
            while(set.has(s[r])){
                set.delete(s[left]);
                left++
            }
            set.add(s[r]);
            maxlen= Math.max(maxlen,r-left+1)
        }
        return maxlen
    }
}
