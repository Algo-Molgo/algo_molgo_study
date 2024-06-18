const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const n = Number(input[0]);
  const [start, end] = input[1].split(" ").map(Number);
  const m = Number(input[2]);

  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [parent, child] = input[3 + i].split(" ").map(Number);
    graph[parent].push(child);
    graph[child].push(parent);
  }

  let result = 0;

  return result;
}

console.log(solution(input));
