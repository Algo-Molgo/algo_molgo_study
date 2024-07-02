const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = Number(inputArguments[0]);
  const pillars = [];

  for (let i = 1; i <= N; i++) {
    const [L, H] = inputArguments[i].split(" ").map(Number);
    pillars.push({ L, H });
  }

  pillars.sort((a, b) => a - b);

  return result;
}

console.log(solution(input));
