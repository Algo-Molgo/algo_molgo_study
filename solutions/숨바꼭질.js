const INPUT_PATH = "../inputs/숨바꼭질.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [start, end] = input[0].split(" ").map(Number);

  if (start === end) {
    return 0;
  }

  const visited = new Set();
  const queue = [];

  queue.push([start, 0]);
  visited.add(start);

  while (queue.length > 0) {
    const [current, time] = queue.shift();

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next === end) {
        return time + 1;
      }

      if (next >= 0 && !visited.has(next)) {
        visited.add(next);
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(solution(input));
