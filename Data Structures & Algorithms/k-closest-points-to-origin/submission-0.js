class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new PriorityQueue((a,b)=>b[0]-a[0]);
        for( const [x,y] of points){
            const dist = x ** 2 + y **2;
            maxHeap.push([dist,x,y]);
            if(maxHeap.size() > k){
                maxHeap.pop();
            }
        }
        let res =[];
        while(maxHeap.size()>0){
            let temp = maxHeap.pop();
            res.push([temp[1],temp[2]]);
        }
        return res;
    }
}
