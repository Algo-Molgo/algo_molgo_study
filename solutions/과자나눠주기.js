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

  let longestStick = 0;
  let start = 1;
  let end = sticks[sticks.length - 1];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let stickCount = 0;

    sticks.forEach((stick) => (stickCount += Math.floor(stick / mid)));

    if (stickCount >= M) {
      start = mid + 1;
      longestStick = mid;
    } else {
      end = mid - 1;
    }
  }

  return longestStick;
}

console.log(solution(input));
