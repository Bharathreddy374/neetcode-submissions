class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        for(let num of nums){
            if(map.has(num)) return true
            else{
                map.set(num,true);
            }
        }
        return false
    }
}
