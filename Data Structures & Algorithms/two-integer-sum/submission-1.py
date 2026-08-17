class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        count ={}
        for i , num in enumerate(nums):
            if target-num in count:
                return [count[target-num],i]
            count[num] = i        