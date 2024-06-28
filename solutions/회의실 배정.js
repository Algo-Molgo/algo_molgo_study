const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = Number(inputArguments[0]);
  const meetings = inputArguments
    .slice(1)
    .map((line) => line.split(" ").map(Number));
  let count = 0;

  meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  return count;
}

console.log(solution(input));
