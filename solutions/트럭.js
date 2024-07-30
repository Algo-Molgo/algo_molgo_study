const INPUT_PATH = "../inputs/트럭.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, W, L] = input[0].split(" ").map(Number);
  const trucks = input[1].split(" ").map(Number);
  const bridge = [];
  let time = 0;
  let bridgeWeight = 0;

  while (trucks.length > 0 || bridge.length > 0) {
    time++;

    if (bridge.length > 0 && bridge[0].endTime === time) {
      bridgeWeight -= bridge[0].weight;
      bridge.shift();
    }

    if (
      trucks.length > 0 &&
      bridgeWeight + trucks[0] <= L &&
      bridge.length < W
    ) {
      const truckWeight = trucks.shift();

      bridge.push({ weight: truckWeight, endTime: time + W });
      bridgeWeight += truckWeight;
    }
  }

  return time;
}

console.log(solution(input));
