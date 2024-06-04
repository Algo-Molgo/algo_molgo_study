const INPUT_PATH = "../inputs/요세푸스문제.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");
const result = [];

function solution(N, K) {
  const numArray = new Array(Number(N)).fill(0).map((value, index) => {
    value = index + 1;

    return value;
  });
  let current = K - 1;

  while (result.length < N) {
    current = current % numArray.length;

    result.push(numArray.splice(current, 1)[0]);

    current += K - 1;
  }
}

solution(N, K);

console.log(`<${result.join(", ")}>`);
