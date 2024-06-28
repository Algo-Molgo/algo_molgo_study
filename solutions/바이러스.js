//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let answer = 0;
  const [N, _, ...edges] = inputArguments;
  const computerMap = {};

  for (let i = 1; i <= Number(N); i += 1) {
    computerMap[i] = [];
  }

  edges.forEach((edge) => {
    const [nodeA, nodeB] = edge.split(" ");

    computerMap[nodeA].push(nodeB);
    computerMap[nodeB].push(nodeA);
  });

  const visited = new Array(Number(N) + 1).fill(false);
  const queue = computerMap["1"];

  visited[1] = true;

  while (queue.length > 0) {
    const computerNode = queue.shift();

    if (!visited[computerNode]) {
      visited[computerNode] = true;
      computerMap[computerNode].forEach((node) => {
        queue.push(node);
      });
    }
  }

  visited.forEach((isVisit) => {
    if (isVisit) answer += 1;
  });

  return answer - 1;
}

console.log(solution(input));
