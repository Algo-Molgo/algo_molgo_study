const INPUT_PATH = "../inputs/과자나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nephewCount, cookieCount] = input.shift().split(" ").map(Number);
const cookies = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function searchBinary(cookieList) {
  let leftValue = 1;
  let rightValue = cookieList[cookieList.length - 1];
  let result = 0;

  while (leftValue <= rightValue) {
    let count = 0;
    let midValue = Math.floor((leftValue + rightValue) / 2);

    for (let i = 0; i < cookieList.length; i++) {
      const mock = Math.floor(cookieList[i] / midValue);

      if (mock) {
        count += mock;
      }
    }

    if (count < nephewCount) {
      rightValue = midValue - 1;
    } else {
      result = midValue;
      leftValue = midValue + 1;
    }
  }

  return result;
}

console.log(searchBinary(cookies));
