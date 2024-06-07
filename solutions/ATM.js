const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, Times] = [inputArguments[0], inputArguments[1].split(" ")];
  const waitingTimes = Times.map(Number);
  let totalWaitingTime = 0;

  waitingTimes.sort((a, b) => a - b);
  waitingTimes.forEach((time, index) => {
    totalWaitingTime += time * (waitingTimes.length - index);
  });

  return totalWaitingTime;
}

console.log(solution(input));
