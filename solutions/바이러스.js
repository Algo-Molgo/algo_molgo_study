const INPUT_PATH = "../inputs/바이러스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const totalComputers = parseInt(inputArguments[0]);
  const connections = parseInt(inputArguments[1]);

  const computerNetwork = Array(totalComputers + 1)
    .fill()
    .map(() => []);

  for (let i = 2; i < 2 + connections; i++) {
    const [a, b] = inputArguments[i].split(" ").map(Number);
    computerNetwork[a].push(b);
    computerNetwork[b].push(a);
  }

  const virusInfected = Array(totalComputers + 1).fill(false);
  let virusCount = 0;

  function dfs(computer) {
    virusInfected[computer] = true;
    virusCount++;

    for (let connectedComputers of computerNetwork[computer]) {
      if (!virusInfected[connectedComputers]) {
        dfs(connectedComputers);
      }
    }

    return virusCount;
  }

  return dfs(1) - 1;
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
