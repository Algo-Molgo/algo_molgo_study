const INPUT_PATH = "../inputs/숨바꼭질.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [startNumber, targetNumber] = input.map(Number);
let result = Infinity;

function solution(currentNumber, count) {
  if (currentNumber === targetNumber) {
    result = Math.min(count, result);

    return count;
  }

  if (currentNumber > targetNumber) {
    return solution(currentNumber - 1, count + 1);
  }

  const prevNumber = currentNumber - 1;
  const nextNumber = currentNumber + 1;

  if (currentNumber * 2 > targetNumber) {
    if (
      Math.abs(targetNumber - prevNumber * 2) <
      Math.abs(targetNumber - currentNumber * 2)
    ) {
      return solution(prevNumber, count + 1);
    }
  }

  if (currentNumber * 2 < targetNumber) {
    if (
      Math.abs(targetNumber - nextNumber * 2) <
      Math.abs(targetNumber - currentNumber * 2)
    ) {
      return solution(nextNumber, count + 1);
    }
  }
}

solution(startNumber, 0);

console.log(result);
