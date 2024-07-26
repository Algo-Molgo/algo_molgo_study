const INPUT_PATH = "../inputs/숨바꼭질.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split(" ");
const [startNumber, targetNumber] = input.map(Number);

function solution(currentNumber) {
  const countList = new Array(100001).fill(0);
  const queue = [currentNumber];

  while (queue.length) {
    const currentNumber = queue.shift();

    if (currentNumber === targetNumber) {
      return countList[currentNumber];
    }

    const nextNumbers = [
      currentNumber - 1,
      currentNumber + 1,
      currentNumber * 2,
    ];

    for (const nextNumber of nextNumbers) {
      const isSkip =
        nextNumber < 0 || nextNumber > 100000 || countList[nextNumber] !== 0;

      if (isSkip) {
        continue;
      }

      countList[nextNumber] = countList[currentNumber] + 1;

      queue.push(nextNumber);
    }
  }
}

console.log(solution(startNumber));
