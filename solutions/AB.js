const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [A, B] = inputArguments.split(" ").map(Number);
  const queue = [[B, 1]];

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    if (current === A) {
      return count;
    }

    if (current % 2 === 0) {
      queue.push([current / 2, count + 1]);
    }

    if (current % 10 === 1) {
      queue.push([Math.floor(current / 10), count + 1]);
    }
  }

  return -1;
}

console.log(solution(input[0]));
