const INPUT_PATH = "inputs/truck.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Truck {
  constructor(truckWeight) {
    this.weight = truckWeight;
    this.distance = 0;
  }

  isPassed() {
    return this.distance >= W;
  }

  moveForward() {
    this.distance += 1;
  }
}

const [N, W, L] = input[0].split(" ").map(Number);
const trucks = input[1].split(" ").map((truck) => new Truck(Number(truck)));
let bridge = [];


let countTime = 0;
let bridgeWeight = 0;

while (!(trucks.length === 0 && bridge.length === 0)) {
  countTime += 1;
  bridge.forEach((truck) => {
    truck.moveForward();
    if (truck.isPassed()) {
      bridgeWeight -= truck.weight;
      truck.weight = 0;
    };
  });

  bridge = bridge.filter((truck) => truck.weight > 0);

  if (trucks.length === 0) continue;

  const nextTruckWeight = trucks[0].weight;

  if (bridgeWeight + nextTruckWeight > L) continue;

  const truck = trucks.shift();
  bridge.push(truck);
  bridgeWeight += truck.weight;
}


console.log(countTime);
