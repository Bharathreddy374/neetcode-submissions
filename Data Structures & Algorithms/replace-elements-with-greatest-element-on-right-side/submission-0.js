class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rmax = -1
        for(let i = arr.length -1;i>=0;i--){
            let ele = arr[i];
            arr[i] = rmax;
            rmax = Math.max(rmax,ele);
        }
        return arr
    }
}
