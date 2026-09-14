class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      
  // Create an array containing each car's position and speed
  const cars = position.map((pos, index) => ({
    position: pos,
    speed: speed[index],
  }));

  // Sort cars from closest to the target to farthest
  cars.sort((a, b) => b.position - a.position);

  // This represents the arrival time of the closest car
  // to reach the target
  let sourceOfTruth = 0;

  // Number of car fleets
  let fleets = 0;

  for (const car of cars) {
    // Calculate how long this car needs to reach the target
    const time = (target - car.position) / car.speed;

    // If this car takes longer than the car/fleet ahead of it,
    // it cannot catch that fleet, so it creates a new fleet
    if (time > sourceOfTruth) {
      fleets++;

      // This car becomes the new Source of Truth
      sourceOfTruth = time;
    }

    // Otherwise, this car catches the fleet ahead
    // and becomes part of the same fleet
}
    return fleets;

}
}