const INPUT_PATH = "../inputs/회의실배정.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../inputs/회의실배정.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = parseInt(input[0]);
  const meetings = input.slice(1).map(element => element.split(" ").map(Number));

  meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  let count = 0;
  let lastEndTime = 0;

  for (let i = 0; i < n; i++) {
    const [startTime, endTime] = meetings[i];

    if (startTime >= lastEndTime) {
      count++;
      lastEndTime = endTime;
    }
  }

  console.log(count);
}

solution(input);
