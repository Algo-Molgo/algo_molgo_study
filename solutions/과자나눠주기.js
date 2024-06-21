const INPUT_PATH = "../inputs/과자나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [M, _] = inputArguments[0].split(" ").map(Number);
  const sticks = inputArguments[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  while (sticks[sticks.length - 1] > 2) {
    const currentShortest = sticks[sticks.length - M];
    const longestStick = sticks.pop();

    if (currentShortest >= Math.floor(longestStick / 2)) {
      sticks.push(longestStick);
      break;
    }

    sticks.push(Math.floor(longestStick / 2));
    sticks.push(longestStick - Math.floor(longestStick / 2));
    sticks.sort((a, b) => a - b);
  }

  if (sticks.length < M) {
    return 0;
  }

  return sticks[sticks.length - M];
}

console.log(solution(input));
