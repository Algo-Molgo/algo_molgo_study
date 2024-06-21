//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/과자 나눠주기.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const numberOfPeople = parseInt(inputArguments[0].split(" ")[0]);
  const snackLengths = inputArguments[1].split(" ").map(Number);

  let min = 1;
  let max = Math.max(...snackLengths);
  let result = 0;

  while (min <= max) {
    let center = Math.floor((min + max) / 2);
    const count = snackLengths.reduce(
      (sum, snackLength) => sum + Math.floor(snackLength / center),
      0
    );

    if (count >= numberOfPeople) {
      result = center;
      min = center + 1;
    } else {
      max = center - 1;
    }
  }

  return result;
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
