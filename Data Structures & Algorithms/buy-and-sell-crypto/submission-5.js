class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit =0
        let maxprofit = 0
        let b = 0
        let s = 1
        while(s<prices.length){
            if(prices[b]<prices[s]){
                profit = prices[s] - prices[b];
                maxprofit = Math.max(profit,maxprofit)
            }else b=s
            s++
        }
        return maxprofit;
    }
}
