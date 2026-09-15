class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l =0;
        let h = nums.length -1
        if((nums[l] < nums[h]) || nums.length === 1) return nums[l]
        while(l<=h){
            const mid = Math.floor((l+h)/2)
            if(nums[mid] > nums[h]) {
                l = mid +1
            }else if (nums[mid-1] > nums[mid]) return nums[mid];
            else h = mid -1;
        }
    }
}
