class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        let stack = []
        const map = new Map([
            ['(',')'],['{','}'],['[',']']
        ]);
        for(let i =0;i<s.length;i++ ){
            if(map.has(s[i])){
                stack.push(s[i]);
            }else if (map.get(stack[stack.length-1])==s[i]){
                stack.pop();
            }else{
                return false;
            }
        }
        return stack.length === 0;
    }
}
