const INPUT_PATH = "../inputs/예산.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, requests, budget] = [
    Number(input[0]),
    input[1].split(" ").map(Number),
    Number(input[2]),
  ];

  requests.sort((a, b) => a - b);

  let left = 0;
  let right = requests[requests.length - 1];
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let possible = 0;

    for (const request of requests) {
      if (request > mid) {
        possible += mid;
      } else {
        possible += request;
      }
    }

    if (possible <= budget) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(solution(input));
