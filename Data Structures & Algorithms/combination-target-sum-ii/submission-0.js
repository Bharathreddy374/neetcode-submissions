class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let ans = [];
        let cur = [];

        candidates.sort((a, b) => a - b);

        this.backtrack(candidates, target, ans, cur, 0);

        return ans;
    }

    backtrack(nums, target, ans, cur, i) {

        if (target === 0) {
            ans.push([...cur]);
            return;
        }

        if (target < 0 || i >= nums.length) {
            return;
        }

        for (let j = i; j < nums.length; j++) {

            // Skip duplicates at the same level
            if (j > i && nums[j] === nums[j - 1]) {
                continue;
            }

            // Since array is sorted
            if (nums[j] > target) {
                break;
            }

            cur.push(nums[j]);

            // j + 1 → cannot reuse same element
            this.backtrack(
                nums,
                target - nums[j],
                ans,
                cur,
                j + 1
            );

            cur.pop();
        }
    }
}