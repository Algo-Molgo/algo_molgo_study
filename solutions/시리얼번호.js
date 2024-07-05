const INPUT_PATH = "../inputs/시리얼번호.txt";

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../inputs/회의실배정.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = parseInt(input[0]);
  const serials = input.slice(1, n + 1);

  const calculateSum = (str) => {
    let sum = 0;

    for (const char of str) {
      if (!isNaN(char)) {
        sum += parseInt(char);
      }
    }

    return sum;
  };

  const compareSerials = (a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    const sumA = calculateSum(a);
    const sumB = calculateSum(b);
  };
}

solution(input);
