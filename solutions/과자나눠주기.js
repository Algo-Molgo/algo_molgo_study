const INPUT_PATH = "../inputs/과자나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N] = input[0].split(" ").map(Number);
  const snacks = input[1].split(" ").map(Number);
  let maxSnackLength = 0;
  const maxLength = Math.max(...snacks);

  for (let length = 1; length <= maxLength; length++) {
    let providedLength = 0;

    for (const snack of snacks) {
      providedLength += Math.floor(snack / length);
    }

    if (providedLength >= M) {
      maxSnackLength = length;
    }
  }

  return maxSnackLength;
}

console.log(solution(input));
