const INPUT_PATH = "../inputs/회의실배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const meetings = input.map((str) => str.split(" ").map(Number));
  let result = 0;
  let endTime = 0;

  meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  for (let i = 0; i < N; i++) {
    if (meetings[i][0] >= endTime) {
      endTime = meetings[i][1];
      result++;
    }
  }

  return result;
}

console.log(solution(input));
