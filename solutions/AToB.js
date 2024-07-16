const INPUT_PATH = "inputs/AToB.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);

const path = [A, 1];

const stack = [path];

while(stack.length > 0) {
  const [currentNumber, count] = stack.pop();

  const doubledNumber = currentNumber * 2;
  const addedNumber = Number(`${String(currentNumber)}1`);

  if (doubledNumber === B || addedNumber === B) {
    console.log(count + 1);
    return;
  }

  if (doubledNumber < B) {
    stack.push([doubledNumber, count + 1]);
  }

  if (addedNumber < B) {
    stack.push([addedNumber, count + 1]);
  }
}

console.log(-1);
