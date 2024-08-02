const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let testCases = Number(inputArguments.shift());

  while (testCases-- > 0) {
    const logCount = Number(inputArguments.shift());
    const logs = inputArguments.shift().split(" ").map(Number);
    const sortedLogs = Array(logCount).fill(0);
    let level = 0;

    logs.sort((a, b) => a - b);

    logs.forEach((log, index) => {
      if (index % 2 === 0) {
        sortedLogs[index / 2] = log;
      } else {
        sortedLogs[logCount - 1 - Math.floor(index / 2)] = log;
      }
    });

    for (let i = 0; i < sortedLogs.length - 1; i++) {
      level = Math.max(level, Math.abs(sortedLogs[i] - sortedLogs[i + 1]));
    }

    console.log(level);
  }
}

solution(input);
