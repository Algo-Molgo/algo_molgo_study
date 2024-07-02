const INPUT_PATH = "../inputs/창고다각형.txt";

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../inputs/회의실배정.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = parseInt(input[0]);
  const heights = input.slice(1).map(Number);

  let maxHeight = 0;
  let maxIndex = 0;
  let range = 0;

  for (let i = 0; i < N; i++) {
    if (heights[i] > maxHeight) {
      maxHeight = heights[i];
      maxIndex = i;
    }
  }
}

solution(input);
