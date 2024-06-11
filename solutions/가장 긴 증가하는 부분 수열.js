//INPUT_PATH에 오늘 문제에 해당하는 input파일경로를 적어주세요
const INPUT_PATH = "../inputs/가장 긴 증가하는 부분 수열..txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const numList = inputArguments[1].split(" ").map(Number);

  const lisLengths = new Array(numList.length).fill(1);

  for (let i = 1; i < numList.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numList[i] > numList[j]) {
        lisLengths[i] = Math.max(lisLengths[i], lisLengths[j] + 1);
      }
    }
  }

  return Math.max(...lisLengths);
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
