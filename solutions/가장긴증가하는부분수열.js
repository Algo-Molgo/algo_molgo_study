const INPUT_PATH = "../inputs/가장긴증가하는부분수열.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const sequence = input[1].split(" ").map(Number);
  const resultList = [];

  for (const number of sequence) {
    if (resultList.length === 0 || resultList[resultList.length - 1] < number) {
      resultList.push(number);
    } else {
      let left = 0;
      let right = resultList.length - 1;

      while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (resultList[mid] < number) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }

      resultList[right] = number;
    }
  }

  return resultList.length;
}

console.log(solution(input));
