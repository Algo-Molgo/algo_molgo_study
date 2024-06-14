const INPUT_PATH = "../inputs/숫자정사각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const result = "정답";
  const [rows, cols] = inputArguments.shift().split(" ");
  const board = inputArguments;
  let maxLength = Math.min(rows, cols) - 1;

  while (maxLength > 0) {
    for (let y = 0; y + maxLength < rows; y += 1) {
      for (let x = 0; x + maxLength < cols; x += 1) {
        if (
          board[y][x] === board[y + maxLength][x] &&
          board[y + maxLength][x] === board[y][x + maxLength] &&
          board[y][x + maxLength] === board[y + maxLength][x + maxLength]
        ) {
          return (maxLength + 1) ** 2;
        }
      }
    }

    maxLength -= 1;
  }

  return 1;
}

console.log(solution(input));
