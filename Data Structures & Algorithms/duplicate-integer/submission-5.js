class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();
        for(let i =0;i<nums.length;i++){
            if(nums[i] in seen) return true;
            seen[nums[i]] = seen.set(nums[i])
        }
        return false
    }
}
