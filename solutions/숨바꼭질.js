const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, K] = inputArguments[0].split(" ").map(Number);
  const timesOfNumber = Array(100001).fill(0);
  let queue = [N];

  while (queue.length > 0) {
    const number = queue.shift();

    if (number === K) {
      return timesOfNumber[number];
    }

    const nextNumbers = [number - 1, number + 1, number * 2];

    for (const nextNumber of nextNumbers) {
      if (
        0 <= nextNumber &&
        nextNumber < 100001 &&
        !timesOfNumber[nextNumber]
      ) {
        timesOfNumber[nextNumber] = timesOfNumber[number] + 1;
        queue.push(nextNumber);
      }
    }
  }

  return -1;
}

console.log(solution(input));
