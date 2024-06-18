const INPUT_PATH = "../inputs/촌수계산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const n = parseInt(inputArguments[0]);
  const [source, target] = inputArguments[1]
    .split(" ")
    .map((num) => parseInt(num) - 1);
  const m = parseInt(inputArguments[2]);
  const relations = inputArguments
    .slice(3)
    .map((line) => line.split(" ").map((num) => parseInt(num) - 1));

  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < relations.length; i++) {
    graph[relations[i][0]].push(relations[i][1]);
    graph[relations[i][1]].push(relations[i][0]);
  }

  function findRelative(source, target) {
    const visited = Array(n).fill(false);
    const distance = Array(n).fill(Infinity);
    distance[source] = 0;

    for (let i = 0; i < n; i++) {
      let updated = false;
      for (let j = 0; j < n; j++) {
        if (!visited[j] && distance[j] < Infinity) {
          visited[j] = true;
          for (const neighbor of graph[j]) {
            if (distance[neighbor] > distance[j] + 1) {
              distance[neighbor] = distance[j] + 1;
              updated = true;
            }
          }
        }
      }
      if (!updated) break;
    }

    return distance[target] === Infinity ? -1 : distance[target];
  }

  return findRelative(source, target);
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
