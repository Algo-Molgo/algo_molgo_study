const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const Arr = input[1].split(" ").map(Number);

  const dp = Array(N).fill(1);

  for (let i = 0; i < N; i++) {}

  return Math.max(...dp);
}

console.log(solution(input));
