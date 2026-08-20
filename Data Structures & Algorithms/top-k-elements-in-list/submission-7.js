class Solution {
    topKFrequent(nums, k) {
        const freq = new Map();

        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const arr = [...freq.entries()];

        arr.sort((a, b) => b[1] - a[1]);

        return arr.slice(0, k).map(([key, value]) => key);
    }
}