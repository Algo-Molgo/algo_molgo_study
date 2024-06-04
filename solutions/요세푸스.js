const INPUT_PATH = "../inputs/요세푸스.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [total, interval] = input[0].split(" ").map(Number);
  const queue = new Array(total).fill(0).map((v, i) => i + 1);
  const answer = [];
  let count = 1;

  while (queue.length) {
    if (count === interval) {
      const out = queue.shift();
      answer.push(out);
      count = 1;

      continue;
    }

    const num = queue.shift();
    queue.push(num);

    count++;
  }

  return `<${answer.join(", ")}>`

}

console.log(solution(input));
