class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans =[];
        let cur =[];
        this.backtrack(nums,target,ans,cur,0);
        return ans;
    }
    backtrack(nums,target,ans,cur,i){
        if(target === 0){
            ans.push([...cur]);
        }
        else if(target < 0 || i >= nums.length){
            return
        }else{
            cur.push(nums[i]);
            this.backtrack(nums,target-nums[i],ans,cur,i);
            cur.pop();
            this.backtrack(nums,target,ans,cur,i+1);
        }
    }
}
