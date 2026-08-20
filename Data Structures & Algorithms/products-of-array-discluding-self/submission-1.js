class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zerocnt = 0;
        let zeroidx = -1;
        for(let num=0 ; num<nums.length;num++){
            if(nums[num] != 0){
                product = product *nums[num];
            }
            else if(zerocnt == 0) {
                zerocnt++;
                zeroidx = num;
                
            }
            else{
                return new Array(nums.length).fill(0);
            } 
        }
        
        if(zerocnt == 1){
           const arr = new Array(nums.length).fill(0);
           arr[zeroidx] = product;
           return arr;
        }
        else{
            for(let i =0;i<nums.length;i++){
                nums[i] = product / nums[i];
            }
            return nums;
        }
    }
}
