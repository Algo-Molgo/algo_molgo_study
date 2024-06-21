const INPUT_PATH = "../inputs/과자나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [nephewCount, cookieCount] = input.shift().split(" ").map(Number);
const cookies = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

function divide(array) {
  if (array.length === nephewCount) {
    console.log(array.pop());

    return;
  }

  if (array[0] === 1) {
    console.log(0);

    return;
  }

  if (array.length < nephewCount) {
    const maxNum = array[0];
    const halfNum = Math.floor(maxNum / 2);

    array.splice(0, 1, halfNum, halfNum);
    array.sort((a, b) => b - a);

    divide(array);
  }
}

divide(cookies.slice(0, nephewCount), 0);
