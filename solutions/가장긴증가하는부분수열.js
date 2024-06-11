const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
let [sequenceLength, sequence] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let result = 0;

sequence = sequence.split(" ").map(Number);

function findAsc(startIndex, currentValue, currentLength) {
  result = Math.max(result, currentLength);

  for (let i = startIndex; i < Number(sequenceLength); i++) {
    if (sequence[i] <= currentValue) {
      continue;
    }

    findAsc(sequence[i], i, currentLength + 1);
  }
}

for (let i = 0; i < sequenceLength; i++) {
  findAsc(i, sequence[i], 1);
}

console.log(result);
