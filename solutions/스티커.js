const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [T, ...cases] = input;
  const result = [];
  let index = 0;

  for (let i = 0; i < T; i++) {}
}

console.log(solution(input));
