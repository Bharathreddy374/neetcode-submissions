class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length%2 === 1) return false
        const stack =[]
        const brackets = {
            "(":")",
            "{":"}",
            "[":"]",
        };
        for(let c of s){
            if(brackets[c]){
               stack.push(c);
            }else{
                 if(stack.length > 0 && 
                 brackets[stack[stack.length-1]]=== c){
                    stack.pop()
                }else return false;
            }
        }
        return stack.length === 0;
    }
}
