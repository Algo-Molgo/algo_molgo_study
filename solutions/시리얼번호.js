const INPUT_PATH = "../inputs/시리얼번호.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const guitars = inputArguments.slice(1);

  guitars.sort();
  guitars.sort((a, b) => getSumOfDigits(a) - getSumOfDigits(b));
  guitars.sort((a, b) => a.length - b.length);

  for (const guitar of guitars) {
    console.log(guitar);
  }
}

function getSumOfDigits(str) {
  let sum = 0;

  for (const char of str) {
    sum += parseInt(char) ? parseInt(char) : 0;
  }

  return sum;
}

solution(input);
