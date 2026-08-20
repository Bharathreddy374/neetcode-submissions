class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0], profit = 0;

        for (let i = 1; i < prices.length; i++) {
            buy = Math.min(buy, prices[i]);
            profit = Math.max(profit, prices[i] - buy);
        }
        return profit;
    }
}