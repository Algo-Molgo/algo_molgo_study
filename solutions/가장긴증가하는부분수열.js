const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
let [sequenceLength, sequence] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

sequence = sequence.split(" ").map(Number);
const dp = Array.from({ length: Number(sequenceLength) }, (value) => 0);
dp[0] = 1;

for (let i = 0; i < Number(sequenceLength); i++) {
  let max = 0;

  for (let j = 0; j < i; j++) {
    if (sequence[i] > sequence[j] && dp[j] > max) {
      max = dp[j];
    }

    dp[i] = max + 1;
  }
}

console.log(Math.max(...dp));
