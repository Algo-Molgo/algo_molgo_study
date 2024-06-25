const INPUT_PATH = "../inputs/과자나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N] = input[0].split(" ").map(Number);
  const snacks = input[1].split(" ").map(Number);

  let left = 1;
  let right = Math.max(...snacks);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for (const snack of snacks) {
      count += Math.floor(snack / mid);
    }

    if (count >= M) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(solution(input));
