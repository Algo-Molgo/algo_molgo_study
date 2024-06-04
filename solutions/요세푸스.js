const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "요세푸스.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const answer = [];
const queue = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (j === K) {
      answer.push(queue.shift());
    } else {
      queue.push(queue.shift());
    }
  }
}

console.log(`<${answer.join(", ")}>`);
