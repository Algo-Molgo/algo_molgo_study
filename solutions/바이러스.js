const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const nodes = Number(input.shift());
  const edges = Number(input.shift());
  const graph = Array.from({ length: nodes + 1 }, () => []);
  const visited = Array(nodes + 1).fill(false);

  for (let i = 0; i < edges; i++) {
    const [start, end] = input[i].split(" ").map(Number);

    graph[start].push(end);
    graph[end].push(start);
  }

  function bfs(start) {
    const queue = [start];
    let count = 0;

    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      }
    }

    return count;
  }

  const infectedCount = bfs(1);

  return infectedCount;
}

console.log(solution(input));
