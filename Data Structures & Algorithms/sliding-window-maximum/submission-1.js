class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0;
        let max = -Infinity;
        let res = [];

        // Find max of first window
        for (let i = 0; i < k; i++) {
            max = Math.max(nums[i], max);
        }

        res.push(max);

        for (let r = k; r < nums.length; r++) {

            // New element is bigger
            if (nums[r] > max) {
                max = nums[r];
            }

            // The old maximum is leaving the window
            else if (nums[l] === max) {
                max = -Infinity;

                for (let i = l + 1; i <= r; i++) {
                    max = Math.max(nums[i], max);
                }
            }

            res.push(max);

            // Move left pointer
            l++;
        }

        return res;
    }
}