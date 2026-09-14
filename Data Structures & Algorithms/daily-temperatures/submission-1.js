class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(tem) {
        const stack = []; // stores indices
        const ans = new Array(tem.length).fill(0);

        for (let i = tem.length - 1; i >= 0; i--) {

            // Remove temperatures that cannot be the answer
            while (
                stack.length > 0 &&
                tem[stack[stack.length - 1]] <= tem[i]
            ) {
                stack.pop();
            }

            // If stack is not empty, top is the next warmer day
            if (stack.length > 0) {
                ans[i] = stack[stack.length - 1] - i;
            }

            // Current day becomes a candidate for earlier days
            stack.push(i);
        }

        return ans;
    }
}