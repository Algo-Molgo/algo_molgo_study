const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [trucks, bridge_length, weight] = inputArguments[0]
    .split(" ")
    .map(Number);
  const truck_weights = inputArguments[1].split(" ").map(Number);

  let time = 0;
  let totalWeight = 0;
  const trucksOnBridge = [[0, 0]];
  const waitingTrucks = truck_weights.reverse();

  while (trucksOnBridge.length > 0 || waitingTrucks.length > 0) {
    if (trucksOnBridge[0][1] === time) {
      totalWeight -= trucksOnBridge.shift()[0];
    }

    if (totalWeight + waitingTrucks[waitingTrucks.length - 1] <= weight) {
      totalWeight += waitingTrucks[waitingTrucks.length - 1];
      trucksOnBridge.push([waitingTrucks.pop(), time + bridge_length]);
    } else if (trucksOnBridge[0]) {
      time = trucksOnBridge[0][1] - 1;
    }

    time++;
  }

  return time;
}

console.log(solution(input));
