const INPUT_PATH = "inputs/seekAndHide.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const queue = [[N, 0]];
const visited = Array(100003).fill(false);

let front = 0;

while (front < queue.length) {
  const [number, count] = queue[front++];

  if (number < 0 || number > 100002 || visited[number]) continue;

  visited[number] = true;

  if (number === M) {
    console.log(count);
    return;
  }

  queue.push([number - 1, count + 1]);

  if (number < M) {
    queue.push([number * 2, count + 1]);
    queue.push([number + 1, count + 1]);
  }
}
