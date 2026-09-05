class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        s1 = s1.split('').sort().join('');

        let l = 0;

        for (let r = s1.length - 1; r < s2.length; r++) {
            let substr = s2.slice(l, r + 1)
                .split('')
                .sort()
                .join('');

            if (s1 === substr) return true;

            l++;
        }

        return false;
    }
}