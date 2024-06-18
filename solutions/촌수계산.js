const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const [a, b] = input[1].split(" ").map(Number);
  const relations = input.slice(3).map(line => line.split(" ").map(Number));
  const graph = Array.from({ length: N + 1 }, () => []);

  relations.forEach(([parent, child]) => {
    graph[parent].push(child);
    graph[child].push(parent);
  });

  const queue = [0, 0];
}

solution(input);
