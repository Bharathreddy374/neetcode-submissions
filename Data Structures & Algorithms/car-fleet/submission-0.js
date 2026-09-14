class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const cars = [];

        for (let i = 0; i < position.length; i++) {
            const time = (target - position[i]) / speed[i];

            cars.push([position[i], time]);
        }

        // Closest to target first
        cars.sort((a, b) => b[0] - a[0]);

        const stack = [];

        for (const [pos, time] of cars) {

            // If this car takes longer, it forms a new fleet
            if (stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
            }

            // If time <= stack top,
            // this car catches the fleet ahead.
        }

        return stack.length;
    }
}