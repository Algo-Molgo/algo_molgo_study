const INPUT_PATH = "../inputs/창고다각형.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const widths = input
    .map((str) => str.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  const maxHeight = widths.reduce((max, curr) => Math.max(max, curr[1]), 0);
}

console.log(solution(input));
