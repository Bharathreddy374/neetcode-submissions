class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let m = nums1.length
        let n = nums2.length
        let n1 =0;
        let n2 = 0;
        let curr =0
        let prev=0
        for(let i=0;i<=(Math.ceil(m+n)/2);i++){
            prev = curr;
            if(n1<m && (n2>=n ||nums1[n1]<=nums2[n2])){
                curr = nums1[n1]
                n1++
            }
            else{
                curr = nums2[n2]
                n2++
            } 
        }
        if((m+n)%2===0 ){
            return (prev + curr)/2;
        }
        return curr;
    }
}
