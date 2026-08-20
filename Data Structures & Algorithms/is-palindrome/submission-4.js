class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let i =0;
        let j = cleaned.length - 1;
        while(i<j){
            if(cleaned.charCodeAt(i) !== cleaned.charCodeAt(j)){
                return false
            }
            i++;
            j--;

        }
        return true
        
    }
}
