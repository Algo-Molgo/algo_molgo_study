const INPUT_PATH = "../inputs/회의실 배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const meetings = inputArguments
    .slice(1)
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });

  let count = 0;
  let lastEndTime = 0;

  for (let [start, end] of meetings) {
    if (start >= lastEndTime) {
      lastEndTime = end;
      count++;
    }
  }

  return count;
}

// 백준은 return이 아닌 console.log로 결과값을 판단합니다.
// console.log를 활용하여 log로 정답이 출력 되게끔 로직을 작성해 주세요.
console.log(solution(input));
