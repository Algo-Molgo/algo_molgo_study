const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ");

function solution(N, K) {
  const memberQueue = Array.from({ length: N }, (_, index) => index + 1);
  const removedQueue = [];

  let count = 1;

  while (memberQueue.length > 0) {
    const targetMember = memberQueue.shift();

    if (count % K === 0) {
      removedQueue.push(targetMember);
    } else {
      memberQueue.push(targetMember);
    }

    count += 1;
  }

  return removedQueue.join(", ");
}

console.log(`<${solution(N, K)}>`);
