const INPUT_PATH = "../inputs/atm.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const timeArray = input
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let sum = 0;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    sum += timeArray[i];
    answer += sum;
  }

  return answer;
}

console.log(solution(input));
