const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, K] = inputArguments[0].split(" ").map(Number);
  if (N === K) {
    return 0;
  }

  const maxPosition = 100000;
  const visited = new Array(maxPosition + 1).fill(false);
  const queue = [];

  queue.push({ position: N, time: 0 });
  visited[N] = true;

  while (queue.length > 0) {}
}

console.log(solution(input));
