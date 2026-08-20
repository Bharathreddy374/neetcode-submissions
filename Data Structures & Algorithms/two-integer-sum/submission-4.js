class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const pre = new Map();
        for (let i =0 ; i<nums.length;i++){
            const diff = target - nums[i];
            if(pre.has(diff)){
                return [pre.get(diff),i]
            }
            pre.set(nums[i],i);
        }
    }
}
