class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let l =0
        let r = m *n -1
        while(l<=r){
            const mid = Math.floor((l+r)/2);
            const row = Math.floor(mid/n)
            const col = mid %n
            if(target=== matrix[row][col]) return true;
            else if(target >matrix[row][col]) l = mid+1
            else r = mid-1
        }
        return false

    }
}
