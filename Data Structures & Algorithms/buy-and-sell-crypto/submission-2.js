class Solution {
    maxProfit(prices) {
        let l = 0;
        let maxi = 0;

        for (let r = 1; r < prices.length; r++) {
            if (prices[r] > prices[l]) {
                maxi = Math.max(maxi, prices[r] - prices[l]);
            } else {
                l = r;
            }
        }

        return maxi;
    }
}