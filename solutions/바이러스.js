const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "../inputs/inputBoilerPlate.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const totalComputers = parseInt(input[0]);
  const connectedPairs = parseInt(input[1]);
  const graph = Array.from({ length: totalComputers + 1 }, () => []);

  for (let i = 2; i < 2 + connectedPairs; i++) {
    const [computerA, computerB] = input[i].split(" ").map(Number);
    graph[computerA].push(computerB);
    graph[computerB].push(computerA);
  }

  const visited = Array(totalComputers + 1).fill(false);

  let result = 0;

  function dfs(startComputer) {
    visited[startComputer] = true;

    for (const neighbor of graph[startComputer]) {
      if (!visited[neighbor]) {
        result++;
        dfs(neighbor);
      }
    }
  }

  dfs(1);

  return result;
}

console.log(solution(input));
