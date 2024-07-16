const INPUT_PATH = "../inputs/A->B.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [start, goal] = inputArguments[0].split(" ").map(Number);
  const queue = [[start, 1]];
  const visited = { start: true };

  if (start === goal) return 1;

  while (queue.length > 0) {
    const [number, times] = queue.shift();

    if (visited[number]) {
      continue;
    }

    const double = number * 2;
    const lastOne = number * 10 + 1;

    if (double === goal || lastOne === goal) {
      return times + 1;
    }

    if (double < goal) {
      queue.push([double, times + 1]);
    }

    if (lastOne < goal) {
      queue.push([lastOne, times + 1]);
    }

    visited[number] = true;
  }

  return -1;
}

console.log(solution(input));
