const INPUT_PATH = "../inputs/AB.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [startNum, targetNum] = input.map(Number);
let result = Infinity;

function solution(currentNum, count) {
  if (Number(currentNum) > targetNum) {
    return;
  }

  if (Number(currentNum) === targetNum) {
    result = Math.min(count, result);

    return;
  }

  solution(currentNum + "1", count + 1);
  solution(currentNum * 2, count + 1);
}

solution(startNum, 1);

result = result === Infinity ? -1 : result;

console.log(result);
