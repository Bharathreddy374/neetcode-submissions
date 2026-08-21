class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '') return '';
        let need = new Map();
        let have = 0
        let res =[-1,-1];
        let window = new Map();
        for(let c of t){
            need.set(c,(need.get(c)||0)+1);
        }
        let l =0
        let reslen = Infinity
        for(let r =0;r<s.length;r++){
            let c = s[r];
            window.set(c,(window.get(c) || 0)+1);
            if(need.has(c) && window.get(c) === need.get(c)){
                have++;
            }
            while(have === need.size){
                if(r-l+1 < reslen){
                    reslen = r-l+1;
                    res =[l,r];
                }
                window.set(s[l],(window.get(s[l]))-1)
                if(need.has(s[l]) && window.get(s[l])< need.get(s[l])){
                    have--;
                }
                l++;
            }
        }
        return reslen === Infinity ? '' : s.slice(res[0],res[1]+1);
    }
}
