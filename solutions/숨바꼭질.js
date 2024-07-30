const INPUT_PATH = "./inputs/숨바꼭질.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, K] = inputArguments[0].split(" ").map(Number);

  let time = 0;
  const searchList =[[N, time]]
  const result = [];

  while (searchList.length > 0) {
    const [current, accTime] = searchList.pop();

    const leftMove = current - 1;
    const rightMove = current + 1;
    const doubleMove = current * 2;

    if (current === K) {
      console.log("result", current, accTime)
      result.push(accTime);
      
      continue;
    }

    if (current > K) {
      searchList.push([leftMove, accTime + 1]);
    } else {
      searchList.push([rightMove, accTime + 1]);
      searchList.push([doubleMove, accTime + 1]);
    }
  }

  console.log("result", Math.min(...result));
  return Math.min(...result);
}

console.log(solution(input));
