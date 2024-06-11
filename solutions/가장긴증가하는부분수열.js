const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [_, numbersString] = inputArguments;
  const numbers = numbersString.split(" ").map(Number);
  const results = Array(numbers.length).fill(1);

  for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j <= i; j += 1) {
      if (numbers[j] < numbers[i]) {
        results[i] = Math.max(results[j] + 1, results[i]);
      }
    }
  }

  return Math.max(...results);
}

console.log(solution(input));
