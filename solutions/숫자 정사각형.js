const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, M] = inputArguments[0].split(" ").map(Number);
  const matrix = inputArguments.slice(1).map((line) => line.split(""));

  let maxSize = 1;

  for (let k = 1; k < Math.min(N, M); k++) {
    for (let i = 0; i <= N - k - 1; i++) {
      for (let j = 0; j <= M - k - 1; j++) {
        if (
          matrix[i][j] === matrix[i + k][j] &&
          matrix[i][j] === matrix[i][j + k] &&
          matrix[i][j] === matrix[i + k][j + k]
        ) {
          maxSize = Math.max(maxSize, (k + 1) * (k + 1));
        }
      }
    }
  }

  return maxSize;
}

console.log(solution(input));
