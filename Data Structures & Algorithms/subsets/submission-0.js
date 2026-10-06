class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
subsets(nums) {
    let result = [];

    function backtrack(index, current) {

        // Base case
        if (index === nums.length) {
            result.push([...current]);
            return;
        }

        // Choice 1: Take nums[index]
        current.push(nums[index]);
        backtrack(index + 1, current);

        // Undo
        current.pop();

        // Choice 2: Don't take nums[index]
        backtrack(index + 1, current);
    }

    backtrack(0, []);

    return result;
};
}
