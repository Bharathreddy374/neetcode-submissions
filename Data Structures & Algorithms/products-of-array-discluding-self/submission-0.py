class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prod = 1
        zeros = 0
        for num in nums:
            if num:
                prod *= num
            else:
                zeros +=1
        if zeros > 1 : return [0] * len(nums)
        for i in range(len(nums)):
            if zeros:
                if nums[i]:
                    nums[i] = 0
                else: nums[i] =prod
            else: nums[i] = prod // nums[i]
        return nums