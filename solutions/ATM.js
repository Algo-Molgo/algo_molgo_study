const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input[0]);
const timeArray = input[1].split(" ").map((Number));

function solution(times) {
  const accumulatedTimes = [];
  times.sort((a, b) => a - b);

  for (let i = 0; i < times.length; i++) {
    if (i === 0) {
      accumulatedTimes.push(times[i]);
    } else {
      accumulatedTimes.push(times[i] + accumulatedTimes[i - 1]);
    }
  }

  return accumulatedTimes.reduce((a, b) => a + b, 0);
}

console.log(solution(timeArray));
