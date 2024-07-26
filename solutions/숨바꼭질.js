const INPUT_PATH = "../inputs/밑줄.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number); // 첫 줄에서 N과 K를 읽어옵니다.

function solution(N, K) {
  if (N >= K) {
    return N - K;
  }

  const visited = new Array(100001).fill(false);
  const queue = [];

  queue.push([N, 0]);

  visited[N] = true;

  while (queue.length > 0) {
    const [current, time] = queue.shift();
  }
}

console.log(solution(N, K));
