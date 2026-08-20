class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let len = 0;
        let maxl = 0;
        for(let i =0;i<nums.length;i++){
            if(nums[i] == 1){
                len++;
                maxl = Math.max(len,maxl);
            } else {
                len = 0;
            }
        }
        return maxl;
    }
}
