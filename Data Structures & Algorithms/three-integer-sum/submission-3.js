class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b);
        let res = []
        if (nums[0] > 0) return []
        for(let i =0;i<nums.length -2;i++){
            if(i>0 && nums[i] == nums[i-1]) continue;
            let  l = i+1;
            let r = nums.length-1;
            while(l<r){
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0){
                    res.push([nums[i], nums[l] , nums[r]]);
                    while(l<r && nums[l] === nums[l+1]) l++;
                    while(l<r && nums[r] === nums[r-1]) r--; 
                    l++;
                    r--;
                }else if(sum > 0){
                    r--
                }else l++;
            }
        }
        return res;
    }
}
