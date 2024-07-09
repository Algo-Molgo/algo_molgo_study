const INPUT_PATH = "../inputs/스티커.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const testCases = inputArguments[0];
  const answers = [];

  for (let testCase = 1; testCase <= testCases; testCase += 1) {
    const N = Number(inputArguments[(testCase - 1) * 3 + 1]);
    const stickers = [
      inputArguments[(testCase - 1) * 3 + 2].split(" ").map(Number),
      inputArguments[testCase * 3].split(" ").map(Number),
    ];
    const dp = [Array(N).fill(0), Array(N).fill(0)];

    dp[0][0] = stickers[0][0];
    dp[1][0] = stickers[1][0];
    dp[0][1] = dp[1][0] + stickers[0][1];
    dp[1][1] = dp[0][0] + stickers[1][1];

    for (let i = 2; i < N; i += 1) {
      dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + stickers[0][i];
      dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + stickers[1][i];
    }

    answers.push(Math.max(dp[0][N - 1], dp[1][N - 1]));
  }

  return answers;
}

console.log(solution(input).join("\n"));
