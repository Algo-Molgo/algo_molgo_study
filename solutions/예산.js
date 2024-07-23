const INPUT_PATH = "../inputs/예산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const budgets = inputArguments[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const totalBudget = Number(inputArguments[2]);
  let [start, end] = [1, budgets[budgets.length - 1]];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let temp = 0;

    budgets.forEach((budget) => {
      temp += budget <= mid ? budget : mid;
    });

    if (temp <= totalBudget) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
}

console.log(solution(input));
