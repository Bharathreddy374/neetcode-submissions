class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = 0
        r = 1
        maxprofit = 0
        while(r<len(prices)):
            if(prices[l]>=prices[r]):
                l=r
            else:
                profit = prices[r] - prices[l]
                maxprofit = max(profit,maxprofit)
            r+=1
        return maxprofit