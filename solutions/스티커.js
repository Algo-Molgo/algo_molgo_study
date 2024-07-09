const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let index = 0;
  const testCase = parseInt(inputArguments[index++]);
  const results = [];

  for (let i = 0; i < testCase; i++) {
    const num = parseInt(inputArguments[index++], 10);
    const sticker = [
      inputArguments[index++].split(" ").map(Number),
      inputArguments[index++].split(" ").map(Number),
    ];

    if (num === 1) {
      results.push(Math.max(sticker[0][0], sticker[1][0]));
      continue;
    }

    const previous = [0, 0];
    const current = [0, 0];

    previous[0] = sticker[0][0];
    previous[1] = sticker[1][0];

    current[0] = sticker[1][0] + sticker[0][1];
    current[1] = sticker[0][0] + sticker[1][1];

    for (let j = 2; j < num; j++) {
      const next = [0, 0];
      next[0] = Math.max(current[1], previous[1]) + sticker[0][j];
      next[1] = Math.max(current[0], previous[0]) + sticker[1][j];

      previous[0] = current[0];
      previous[1] = current[1];
      current[0] = next[0];
      current[1] = next[1];
    }

    results.push(Math.max(current[0], current[1]));
  }

  return results.join("\n");
}

console.log(solution(input));
