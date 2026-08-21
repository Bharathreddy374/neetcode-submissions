class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l =0
        let maxlen = 0
        let freq = 0
        let count = new Map();
        for(let r =0;r<s.length;r++){
            count.set(s[r],(count.get(s[r]) || 0)+1)
            freq = Math.max(freq,count.get(s[r]));
            const length = r-l+1
            let replacements = length - freq
            if(replacements>k){
                count.set(s[l],count.get(s[l])-1)
                l++
            }
            maxlen = Math.max(maxlen,r-l+1)
        }
        return maxlen;
    }
}
