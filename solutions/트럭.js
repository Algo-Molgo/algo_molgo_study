const INPUT_PATH = "./inputs/트럭.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [Truck, Width, Limit] = inputArguments[0].split(" ").map(Number);
  const truckList = inputArguments[1].split(" ").map(Number);

  const waitTrucks = [...truckList];
  const finishTrucks = [];
  const onBridge = [];
  const distanceMap = {};
  let time = 0;
  let weight = 0;

  for (const truck of truckList) {
    distanceMap[truck] = 0;
  }

  while (finishTrucks.length !== Truck) {
    time++;

    const nextTarget = waitTrucks.length !== 0 ? waitTrucks[0] : 0;
    const nextWeight = weight + nextTarget;

    if (nextWeight < Limit) {
      const addTarget = waitTrucks.length !== 0 ? waitTrucks.shift() : 0;

      weight += addTarget;

      if (addTarget !== 0) {
        onBridge.push(addTarget);
      }

      for (const item of onBridge) {
        distanceMap[item]++;

        if (distanceMap[item] > Width) {
          const exitTarget = onBridge.shift();

          finishTrucks.push(exitTarget);
          weight -= exitTarget;
        }
      }
    } else {
      for (const item of onBridge) {
        distanceMap[item]++;

        if (distanceMap[item] > Width) {
          const exitTarget = onBridge.shift();

          finishTrucks.push(exitTarget);
          weight -= exitTarget;
        }
      }
    }
  }

  return time;
}

console.log(solution(input));
