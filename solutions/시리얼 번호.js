const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const N = Number(inputArguments[0]);
  const serialNumber = inputArguments.slice(1, N + 1);

  function sum(serial) {
    let sum = 0;

    for (const char of serial) {
      if (!isNaN(char)) {
        sum += Number(char);
      }
    }

    return sum;
  }

  serialNumber.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }

    const sumA = sum(a);
    const sumB = sum(b);

    if (sumA !== sumB) {
      return sumA - sumB;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return a[i] < b[i] ? -1 : 1;
      }
    }

    return 0;
  });

  return serialNumber.join("\n");
}

console.log(solution(input));
