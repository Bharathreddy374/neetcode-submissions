class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    res = [];

    constructor() {
        this.res = [];
    }

    topKFrequent(nums, k) {
        let freq = new Map();
        for (let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);
        }

        for (let [key, value] of freq) {
            this.insert({ key, value });
            if (this.res.length > k) this.removeMinimum();
        }
        return this.res.map((item) => item.key);
    }

    removeMinimum() {
        const min = this.res[0];
        const end = this.res.pop();
        if (this.res.length > 0 && end) {
            this.res[0] = end;
            this.sinkDown();
        }
        return min;
    }

    insert(value) {
        this.res.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.res.length - 1;
        const element = this.res[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.res[parentIdx];
            if (element.value >= parent.value) break;
            this.res[parentIdx] = element;
            this.res[index] = parent;
            index = parentIdx;
        }
    }

    sinkDown() {
        let idx = 0;
        let length = this.res.length;
        let element = this.res[0];

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftIdx < length) {
                leftChild = this.res[leftIdx];
                if (leftChild.value < element.value) swap = leftIdx;
            }

            if (rightIdx < length) {
                rightChild = this.res[rightIdx];
                if (
                    (swap === null && rightChild.value < element.value) ||
                    (swap !== null && rightChild.value < leftChild.value)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) {
                break;
            }

            this.res[idx] = this.res[swap];
            this.res[swap] = element;
            idx = swap;
        }
        return this;
    }
}

