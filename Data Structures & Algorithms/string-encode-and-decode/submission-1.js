class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // Find the '#'
            while (str[j] !== "#") {
                j++;
            }

            // Get length
            const length = Number(str.slice(i, j));

            // Move past '#'
            j++;

            // Extract the actual string
            result.push(str.slice(j, j + length));

            // Move to the next encoded string
            i = j + length;
        }

        return result;
    }
}