const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const line = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let result = 0;
  let sum = 0;

  for (let i = 0; i < input[0]; i++) {
    result += sum + line[i];
    sum += line[i];
  }

  return result;
}

console.log(solution(input));
