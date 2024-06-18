const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = parseInt(input[0]);
  const [personA, personB] = input[1].split(" ").map(Number);
  const m = parseInt(input[2]);
  const relationsList = input
    .slice(3)
    .map((line) => line.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [x, y] of relationsList) {
    graph[x].push(y);
    graph[y].push(x);
  }

  return -1;
}

console.log(solution(input));
