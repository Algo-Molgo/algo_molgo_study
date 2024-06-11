const INPUT_PATH = "../inputs/ATM.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const [peopleLength, people] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let result = 0;

const sortedPeople = people
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

sortedPeople.reduce((acc, cur) => {
  acc = acc + cur;
  result += acc;

  return acc;
}, 0);

console.log(result);
