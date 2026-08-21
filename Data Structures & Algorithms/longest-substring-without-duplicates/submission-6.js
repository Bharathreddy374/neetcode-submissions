class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let sbr = "";
        let len = 0;

        for (let r = 0; r < s.length; r++) {
            if (sbr.indexOf(s[r]) !== -1) {
                sbr = sbr.slice(sbr.indexOf(s[r]) + 1);
            }

            sbr += s[r];

            len = Math.max(len, sbr.length);
        }

        return len;
    }
}