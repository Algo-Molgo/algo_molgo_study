const INPUT_PATH = "../inputs/aToB.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

function solution(A, B) {
  let operationCounts = 1;

  while (B > A) {
    if (B % 2 === 0) {
      B /= 2;
    } else if (B % 10 === 1) {
      B = (B - 1) / 10;
    } else {
      return -1;
    }

    operationCounts++;
  }

  return B === A ? operationCounts : -1;
}

console.log(solution(A, B));
