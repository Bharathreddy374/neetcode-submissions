class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        
        let area = 0
        let l = 0;
        let r = n-1;
        while(l<r){
            let water = Math.min(heights[l], heights[r]) * (r-l);
            area = Math.max(area, water);
            if(heights[l]>heights[r]){
            r--;
            }
            else{
            l++;

            }
        }
        return area;
    }
}
