class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zerocnt =0;
        let zeropos = null
        for(let i =0;i<nums.length;i++){
            if(nums[i] == 0){
                zerocnt++;
                zeropos= i
                if(zerocnt >1) return new Array(nums.length).fill(0);
                
            }
            else product = product * nums[i];
        }
        if(zerocnt){
            let res = new Array(nums.length).fill(0);
            res[zeropos]=product
            return res;
        }
        for(let i =0;i<nums.length;i++){
            nums[i] = product / nums[i];
        }
        return nums
    }
}
