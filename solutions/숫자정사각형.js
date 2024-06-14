const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const square = input.slice(1).map((line) => line.split("").map(Number));
  let maxSize = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let size = 1; i + size < N && j + size < M; size++) {
        if (
          square[i][j] === square[i][j + size] &&
          square[i][j] === square[i + size][j] &&
          square[i][j] === square[i + size][j + size]
        ) {
          const currentSize = (size + 1) * (size + 1);

          if (currentSize > maxSize) {
            maxSize = currentSize;
          }
        }
      }
    }
  }

  return maxSize;
}

console.log(solution(input));
