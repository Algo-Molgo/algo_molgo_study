const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const total = Number(input[0]);
const timeArray = input[1].split(" ").map((Number));

function solution(total, times) {
  times.sort((a, b) => a - b);

  return times.reduce((acc, cur, index) => {
    acc += cur * (total - index);

    return acc;
  }, 0);
}

console.log(solution(total, timeArray));
