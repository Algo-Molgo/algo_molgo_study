const INPUT_PATH = "../inputs/쉬운계단수.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
let length = fs.readFileSync(filePath).toString().trim();
let result = 1;
length = Number(length);

const NUMBER_MAP = {
  0: [1],
  1: [0, 2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9],
  9: [8],
};

function solution(lastNumber, currentLength) {
  if (currentLength > length) {
    return;
  }

  if (currentLength === length) {
    result += 1;
    result %= 1000000000;

    return;
  }

  for (const nextNumber of NUMBER_MAP[lastNumber]) {
    solution(nextNumber, currentLength + 1);
  }

  return;
}

for (let i = 1; i <= 9; i++) {
  solution(i, 1);
}

console.log(result - 1);
