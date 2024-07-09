const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const T = Number(inputArguments[0]);
  const results = [];
  let index = 1;

  return results;
}

console.log(solution(input));
