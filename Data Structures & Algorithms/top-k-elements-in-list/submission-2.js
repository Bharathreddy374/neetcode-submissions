class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // Count frequencies
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Create buckets
        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        );

        // Put numbers into their frequency bucket
        for (let [num, freq] of map) {
            buckets[freq].push(num);
        }

        // Get k most frequent
        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}