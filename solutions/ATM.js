//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const total = inputArguments[0];
  const waitingArr = inputArguments[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let result = waitingArr.reduce(
    (acc, cur, idx) => acc + cur * (total - idx),
    0
  );

  return result;
}

console.log(solution(input));
